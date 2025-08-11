import type { Category } from "@/types/category";

export function useCategoryForm(initialCategory: Category | null = null) {
  const categoryInput = ref<Category>({
    id: null,
    name: "",
  });

  const isEdit = ref(false);
  const loading = ref(false);

  const categories = ref<Category[]>([]);

  async function getCategories() {
    loading.value = true;
    try {
      const response = await $fetch("/api/admin/category/get");
      categories.value = response.categories;
    } catch (error) {
      console.error("Gagal mengambil kategori:", error);
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    getCategories();
  });

  watch(
    () => initialCategory,
    (newVal) => {
      if (newVal) {
        categoryInput.value = {
          id: newVal.id,
          name: newVal.name,
        };
        isEdit.value = true;
      } else {
        categoryInput.value = { id: null, name: "" };
        isEdit.value = false;
      }
    },
    { immediate: true }
  );

  return {
    categoryInput,
    isEdit,
    loading,
    categories,
    getCategories,
  };
}
