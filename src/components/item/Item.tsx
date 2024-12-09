import React from "react";
import styles from "./Item.module.css";
import cream from "../../../public/assets/img/aqua.png";
import { Button } from "../../ui/Button";

function Item() {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={cream} alt="Soft Finish Product" />
        <button className={styles.wishlistBtn}>❤️</button>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>Soft Finish</h3>
        <p className={styles.productDescription}>
          All Around Safe Block Sun Milk SPF50+/PA++
        </p>
        <p className={styles.productPrice}>$25</p>
        <Button
          className={styles.addToBagBtn}
          onClick={() => {
            alert("Added to cart");
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default Item;
