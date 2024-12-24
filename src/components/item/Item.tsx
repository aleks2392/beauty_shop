import React from "react";
import styles from "./Item.module.css";
import { Button } from "../../ui/Button";
import wishIcon from "../../../public/assets/img/wishlistIcon.png";
import activeHeartIcon from "../../../public/assets/img/redHeart.png";
import { useProductActions } from "../../pages/productCard/hook/useProductActions";

type Props = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const Item: React.FC<Props> = ({ name, description, price, image }) => {
  const { isWishlisted, toggleWishlist, handleAddToCart } = useProductActions();

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={image} alt={name} />
        <button
          className={styles.wishlistBtn}
          onClick={toggleWishlist}
          aria-label="Toggle Wishlist"
        >
          <img
            src={isWishlisted ? activeHeartIcon : wishIcon}
            alt={isWishlisted ? "Active Heart" : "Wishlist Icon"}
          />
        </button>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
        <Button
          label="Add To Cart"
          className="transparent"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Item;
