export interface Product {
  id: number | null;
  name: string;
  color: string;
  price: number;
  categoryId: number | null;
  category?: {
    id: number;
    name: string;
  } | null;
  image: any;
}
