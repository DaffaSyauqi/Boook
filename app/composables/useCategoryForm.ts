import type { Category } from "@/types/category";

export function useCategoryForm(initialCategory: Category | null = null) {
  const categoryInput = ref<Category>({
    id: null,
    name: "",
  });

  const isEdit = ref(false);
  const headers = useHeaders();

  const {
    data,
    pending: loading,
    refresh,
  } = useFetch("/api/admin/category/get", {
    headers: {
      ...headers,
    },
  });

  const categories = computed<Category[]>(() => data.value?.categories ?? []);

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
    refresh,
  };
}
