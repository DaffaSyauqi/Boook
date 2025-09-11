<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogScrollContent class="max-w-xl">
      <DialogHeader>
        <DialogTitle>Manage Product Images</DialogTitle>
      </DialogHeader>

      <!-- Carousel -->
      <Carousel class="relative max-w-sm mx-auto" v-if="images.length > 0">
        <CarouselContent>
          <CarouselItem v-for="img in images" :key="img.id">
            <div class="p-2">
              <Card class="relative">
                <CardContent
                  class="flex flex-col items-center justify-center aspect-square p-2"
                >
                  <img
                    :src="img.url"
                    alt="Product Image"
                    class="object-cover rounded cursor-pointer"
                    @click="viewImage(img.url)"
                  />
                  <BaseBtn
                    variant="destructive"
                    class="w-full mt-auto"
                    label="Delete"
                    @click="removeImageConfirm(img)"
                  >
                  </BaseBtn>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <!-- Upload Form -->
      <div class="pt-6 space-y-2">
        <Label>Upload Images (max 5)</Label>
        <BaseInput
          type="file"
          multiple
          @change="handleFileChange"
          :disabled="images.length >= 5"
        />
        <p v-if="images.length >= 5" class="text-sm text-red-500">
          Maximum 5 images allowed
        </p>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 pt-6">
        <DialogClose>
          <DialogClose>
            <BaseBtn variant="secondary" :label="'Cancel'" :loading="false" />
          </DialogClose>
        </DialogClose>
        <BaseBtn
          :label="'Confirm'"
          :loading="uploading"
          :disabled="images.length === 0"
          @click="confirmUpload"
        />
      </div>

      <!-- Fullscreen Viewer -->
      <Dialog :open="showViewer" @update:open="showViewer = $event">
        <DialogContent class="!max-w-4xl p-10">
          <img
            :src="selectedImage"
            alt="Full Image"
            class="w-full h-auto object-contain"
          />
        </DialogContent>
      </Dialog>

      <ConfirmDeleteDialog
        v-model:open="deleteDialogOpen"
        :item-id="imageToDelete?.id"
        :item-name="imageToDelete?.name"
        @confirm="removeImage"
      />
    </DialogScrollContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const uploading = ref(false);
const deleteDialogOpen = ref(false);
const imageToDelete = ref<{ id: number; name: string } | null>(null);

const props = defineProps<{
  open: boolean;
  productId: number;
}>();

const headers = useHeaders();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

interface ImageItem {
  id: number;
  file?: File;
  url: string;
  isUploaded: boolean;
}

const images = ref<ImageItem[]>([]);
let imageId = 0;

onMounted(fetchImages);

async function fetchImages() {
  try {
    const res = await $fetch(
      `/api/admin/product/image?productId=${props.productId}`,
      {
        headers: {
          ...headers,
        },
      }
    );
    if (Array.isArray(res)) {
      images.value = res.map((img) => ({
        id: img.id,
        url: img.url,
        isUploaded: true,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }
}

watch(
  () => props.open,
  async (val) => {
    if (val) {
      try {
        const res = await $fetch("/api/admin/product/get-image", {
          headers: {
            ...headers,
          },
          params: { productId: props.productId },
        });

        images.value = res.images.map((img: any) => ({
          id: img.id,
          file: undefined,
          url: img.url,
          isUploaded: true,
        }));
      } catch (error) {
        showValidateError(error);
      }
    }
  }
);

function handleFileChange(e: Event) {
  const files = (e.target as HTMLInputElement).files;
  if (!files) return;

  for (const file of files) {
    if (images.value.length >= 5) {
      errorMsg("Maximum 5 images allowed.");
      break;
    }
    const url = URL.createObjectURL(file);
    images.value.push({
      id: imageId++,
      file,
      url,
      isUploaded: false,
    });
  }

  (e.target as HTMLInputElement).value = "";
}

function removeImageConfirm(image: ImageItem) {
  if (!image.isUploaded) {
    images.value = images.value.filter((img) => img.id !== image.id);
    return;
  }

  imageToDelete.value = {
    id: image.id,
    name: image.url.split("/").pop() || "Image",
  };
  deleteDialogOpen.value = true;
}

async function removeImage(id: number) {
  const target = images.value.find((img) => img.id === id);
  if (!target) return;

  if (!target.isUploaded) {
    images.value = images.value.filter((img) => img.id !== id);
    return;
  }

  try {
    const res = await $fetch("/api/admin/product/delete-image", {
      headers: {
        ...headers,
      },
      method: "POST",
      body: { id },
    });

    if (res.success) {
      successMsg(res.message);
      images.value = images.value.filter((img) => img.id !== id);
    } else {
      errorMsg(res.message);
    }
  } catch (error) {
    showValidateError(error);
  } finally {
    deleteDialogOpen.value = false;
    imageToDelete.value = null;
  }
}

const showViewer = ref(false);
const selectedImage = ref("");

function viewImage(url: string) {
  selectedImage.value = url;
  showViewer.value = true;
}

async function confirmUpload() {
  if (images.value.length === 0) {
    errorMsg("Please upload at least 1 image.");
    return;
  }

  const filesToUpload = images.value.filter((img) => img.file);
  if (filesToUpload.length === 0 && images.value.length >= 5) {
    errorMsg("Maximum 5 images allowed.");
    return;
  }

  if (filesToUpload.length === 0) {
    errorMsg("No new images selected to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("productId", props.productId.toString());

  for (const img of filesToUpload) {
    if (img.file) {
      formData.append("file", img.file);
    }
  }

  uploading.value = true;

  try {
    const response = await $fetch("/api/admin/product/upload-image", {
      headers: {
        ...headers,
      },
      method: "POST",
      body: formData,
    });

    successMsg(response?.message);
  } catch (error) {
    showValidateError(error);
  } finally {
    uploading.value = false;
    emit("update:open", false);
    images.value = [];
    imageId = 0;
    fetchImages();
  }
}
</script>
