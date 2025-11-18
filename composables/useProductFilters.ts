export const useProductFilters = defineStore("productFilters", {
  state: () => ({
    selectedCategory: null as string | null,
    priceRange: [0, 1000] as [number, number],
    rating: 0 as number,
  }),

  actions: {
    setCategory(category: string | null) {
      this.selectedCategory = category;
    },
    setPriceRange(min: number, max: number) {
      this.priceRange = [min, max];
    },
    setRating(value: number) {
      this.rating = value;
    },
    resetFilters() {
      this.selectedCategory = null;
      this.priceRange = [0, 10000000];
      this.rating = 0;
    },
  },
});
