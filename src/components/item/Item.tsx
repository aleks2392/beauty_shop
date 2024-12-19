import React, { FC } from "react";
import styles from "./Item.module.css";
// import cream from "../../../public/assets/img/aqua.png";
import { Button } from "../../ui/Button";

type Props = {
  name: string;
  description: string;
  price: string;
  image: string;
  onAddToCart: () => void;
  onWishlistClick?: () => void;
};

const Item: FC<Props> = ({
  name,
  description,
  price,
  image,
  onAddToCart,
  onWishlistClick,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={image} alt="Soft Finish Product" />
        <button className={styles.wishlistBtn} onClick={onWishlistClick}>
          ❤️
        </button>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>${price}</p>
        <Button
          label="Add To Cart"
          className="transparent"
          onClick={onAddToCart}
        ></Button>
      </div>
    </div>
  );
};

export default Item;
