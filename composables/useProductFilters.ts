// composables/useProductFilters.ts
import { defineStore } from "pinia";

export const useProductFilters = defineStore("productFilters", {
  state: () => ({
    selectedCategory: null as string | null,
    priceRange: [0, 2000] as [number, number],
    selectedColor: "" as string,
    rating: 0 as number,
  }),

  actions: {
    setCategory(category: string | null) {
      this.selectedCategory = category;
    },
    setPriceRange(min: number, max: number) {
      this.priceRange = [min, max];
    },
    setColor(color: string) {
      this.selectedColor = color;
    },
    setRating(value: number) {
      this.rating = value;
    },
    resetFilters() {
      this.selectedCategory = null;
      this.priceRange = [0, 10000000];
      this.selectedColor = "";
      this.rating = 0;
    },
  },
});
