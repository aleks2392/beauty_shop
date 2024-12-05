/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import styles from "./Inst.module.css";
import iamageInst from "../../../public/assets/img/soft_finish.png";
import { Button } from "../../ui/Button";

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
        <span>SHARE HOW YOU BLOSSOMED WITH </span>
        <span className={styles.hashtag}>#BLOOMBEAUTY</span>
      </header>
      <div className={styles.gallerySubheader}>
        <a href="#">See All</a>
      </div>
      <div className={styles.galleryImages}>
        {images.map((src, index) => (
          <div className={styles.galleryImage} key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
            <div className={styles.overlay}>
              <Button
                className={styles.overlayButton}
                onClick={() => {
                  alert("See In");
                }}
              >
                See In
              </Button>
              <Button
                className={styles.overlayButton}
                onClick={() => {
                  alert("Buy Now");
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button
        className={styles.galleryButton}
        onClick={() => {
          alert("Follow Us");
        }}
      >
        Follow Us
      </Button>
    </div>
  );
};

export default InstagramSection;
