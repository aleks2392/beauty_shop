import { useCallback, useState } from "react";

export const useProductActions = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = useCallback(() => {
    alert("Added to cart!");
  }, []);

  const toggleWishlist = useCallback(() => {
    setIsWishlisted((prev) => !prev);
  }, []);

  return {
    isWishlisted,
    toggleWishlist,
    handleAddToCart,
  };
};
