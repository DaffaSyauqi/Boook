import type { Product } from "@/types/product";

export function useProductForm(initialProduct: Product | null = null) {
  const productInput = ref<Product>({
    id: null,
    name: "",
    color: "",
    price: 0,
    categoryId: null,
  });

  const isEdit = ref(false);
  const loading = ref(false);

  watch(
    () => initialProduct,
    (newVal) => {
      if (newVal) {
        productInput.value = {
          id: newVal.id,
          name: newVal.name,
          color: newVal.color,
          price: newVal.price,
          categoryId: newVal.categoryId,
        };
        isEdit.value = true;
      } else {
        productInput.value = {
          id: null,
          name: "",
          color: "",
          price: 0,
          categoryId: null,
        };
        isEdit.value = false;
      }
    },
    { immediate: true }
  );

  return {
    productInput,
    isEdit,
    loading,
  };
}
