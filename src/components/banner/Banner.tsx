import React from "react";
import { Button } from "../../ui/Button";
import styles from "./Banner.module.css";
import bannerImg from "../../../public/assets/img/bannerImg.png";

export const Banner = () => {
  return (
    <section className={styles.firstScreen}>
      <div className={styles.rectangle2}></div>
      <div
        className={styles.rectangle3}
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>
      <div className={styles.bannerContent}>
        <h1>
          DISCOVER YOUR INNER BEAUTY
          <br />
          WITH BLOSSOM GLOW KIT
        </h1>
        <p>Great gift for yourself and loved ones</p>
        <Button
          label="Shop Now"
          className="pink medium"
          onClick={() => {
            alert("Working");
          }}
        ></Button>
      </div>
    </section>
  );
};
