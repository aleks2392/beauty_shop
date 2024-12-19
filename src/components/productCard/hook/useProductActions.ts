import { useCallback } from "react";

export const useProductActions = () => {
  const handleAddToCart = useCallback(() => {
    alert("Added to cart!");
  }, []);

  const handleWishlistClick = useCallback(() => {
    alert("Added to wishlist!");
  }, []);

  return { handleAddToCart, handleWishlistClick };
};
