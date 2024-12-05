import React from "react";
import Item from "../item/Item";
import bestSallerStyles from "./bestSallers.module.css";
// @ts-expect-error" // eslint-line
import flowerLeft from "../../../public/assets/img/leftFlower.png";
// @ts-expect-error" // eslint-line
import flowerRight from "../../../public/assets/img/rightFlower.png";

const BestSallers = () => {
  return (
    <>
      <div className={bestSallerStyles.titleNewSellers}>
        <img src={flowerRight} alt="Flower Right" />
        <h2>NEW ARRIVALS</h2>
        <img src={flowerLeft} alt="Flower Left" />
      </div>
      <a href="/BEST SALLERS" className={bestSallerStyles.seeAllSallers}>
        See All
      </a>
      <div className={bestSallerStyles.containerSallers}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
};

export default BestSallers;
