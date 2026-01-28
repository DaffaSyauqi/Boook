import type { Product } from "@/types/product";

export function useProductForm(initialProduct: Product | null = null) {
  const productInput = ref<Product>({
    id: null,
    name: "",
    price: 0,
    categoryId: null,
  });

  const isEdit = ref(false);
  const headers = useHeaders();

  const {
    data,
    pending: loading,
    refresh,
  } = useFetch("/api/admin/product/get", {
    headers: {
      ...headers,
    },
  });

  const products = computed<Product[]>(() => data.value?.products ?? []);

  watch(
    () => initialProduct,
    (newVal) => {
      if (newVal) {
        productInput.value = {
          id: newVal.id,
          name: newVal.name,
          price: newVal.price,
          categoryId: newVal.categoryId,
        };
        isEdit.value = true;
      } else {
        productInput.value = {
          id: null,
          name: "",
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
    products,
    refresh,
  };
}
