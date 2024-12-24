import React from "react";
import styles from "./Inst.module.css";
import iamageInst from "../../../public/assets/img/instShots.png";
import { Button } from "../../ui/Button";
import flowerLeft from "../../../public/assets/img/leftFlower.png";
import flowerRight from "../../../public/assets/img/rightFlower.png";
import instagram from "../../../public/assets/img/instagram.png";

const InstagramSection = () => {
  const images = [
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
    iamageInst,
  ];

  return (
    <div className={styles.galleryContainer}>
      <header className={styles.galleryHeader}>
        <img src={flowerRight} alt="Flower Right" />
        <span>SHARE HOW YOU BLOSSOMED WITH </span>
        <span className={styles.hashtag}>#BLOOMBEAUTY</span>
        <img src={flowerLeft} alt="Flower Right" />
      </header>
      <div className={styles.gallerySubheader}>
        <a href="#">See All</a>
      </div>
      <div className={styles.galleryImages}>
        {images.map((src, index) => (
          <div className={styles.galleryImage} key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
            <div className={styles.instOverlay}>
              <Button
                label="See In"
                className="pink small"
                onClick={() => {
                  alert("See In");
                }}
              >
                <img src={instagram} alt="Inst" />
              </Button>
              <Button
                label="Buy Now"
                className="pink small"
                onClick={() => {
                  alert("Buy Now");
                }}
              ></Button>
            </div>
          </div>
        ))}
      </div>
      <Button
        label="Follow Us"
        className="pink medium"
        onClick={() => {
          alert("Follow Us");
        }}
      ></Button>
    </div>
  );
};

export default InstagramSection;
