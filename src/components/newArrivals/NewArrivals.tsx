import React from "react";
import Item from "../../components/item/Item";
import styles from "./NewArrivals.module.css";
import aqua from "../../../public/assets/img/aqua.png";
import flowerLeft from "../../../public/assets/img/leftFlower.png";
import flowerRight from "../../../public/assets/img/rightFlower.png";

function NewArrivals() {
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
        {[...Array(4)].map((_, index) => (
          <Item
            key={index}
            name="Soft Finish"
            description="All Around Safe Block Sun Milk SPF50+/PA++"
            price="$25"
            image={aqua}
          />
        ))}
      </div>
    </>
  );
}

export default NewArrivals;
