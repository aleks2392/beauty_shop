import React from "react";
import Item from "../../components/item/Item";
import styles from "./NewArrivals.module.css";
import creamImage from "../../../public/assets/img/cream.png";
import flowerLeft from "../../../public/assets/img/leftFlower.png";
import flowerRight from "../../../public/assets/img/rightFlower.png";
import { useProductActions } from "../productCard/hook/useProductActions";

function NewArrivals() {
  const { handleAddToCart, handleWishlistClick } = useProductActions();

  return (
    <>
      <div className={styles.titleNewArrivals}>
        <img src={flowerRight} alt="Flower Right" />
        <h2>NEW ARRIVALS</h2>
        <img src={flowerLeft} alt="Flower Left" />
      </div>
      <a href="/NEW ARRIVALS" className={styles.seeAllArrivals}>
        See All
      </a>
      <div className={styles.containerArrivals}>
        <Item
          name="Soft Finish"
          description="All Around Safe Block Sun Milk SPF50+/PA++"
          price="$25"
          image={creamImage}
          onAddToCart={handleAddToCart}
          onWishlistClick={handleWishlistClick}
        />
        <Item
          name="Soft Finish"
          description="All Around Safe Block Sun Milk SPF50+/PA++"
          price="$25"
          image={creamImage}
          onAddToCart={handleAddToCart}
          onWishlistClick={handleWishlistClick}
        />
        <Item
          name="Soft Finish"
          description="All Around Safe Block Sun Milk SPF50+/PA++"
          price="$25"
          image={creamImage}
          onAddToCart={handleAddToCart}
          onWishlistClick={handleWishlistClick}
        />
        <Item
          name="Soft Finish"
          description="All Around Safe Block Sun Milk SPF50+/PA++"
          price="$25"
          image={creamImage}
          onAddToCart={handleAddToCart}
          onWishlistClick={handleWishlistClick}
        />
      </div>
    </>
  );
}

export default NewArrivals;
