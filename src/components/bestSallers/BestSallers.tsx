import React from "react";
import Item from "../item/Item";
import bestSallerStyles from "./bestSallers.module.css";
import creamImage from "../../../public/assets/img/cream.png";
import flowerLeft from "../../../public/assets/img/leftFlower.png";
import flowerRight from "../../../public/assets/img/rightFlower.png";
import { useProductActions } from "../productCard/hook/useProductActions";

const BestSallers = () => {
  const { handleAddToCart, handleWishlistClick } = useProductActions();

  return (
    <>
      <div className={bestSallerStyles.titleNewSellers}>
        <img src={flowerRight} alt="Flower Right" />
        <h2>BEST SELLERS</h2>
        <img src={flowerLeft} alt="Flower Left" />
      </div>
      <a href="/BEST SALLERS" className={bestSallerStyles.seeAllSallers}>
        See All
      </a>
      <div className={bestSallerStyles.containerSallers}>
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
};

export default BestSallers;
