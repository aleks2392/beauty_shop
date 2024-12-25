export type GetProductsResponse = Array<{
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  rating: number | null;
  price: number;
  size: string;
  isNewArrival: boolean;
  isBestSellers: boolean;
}>;
