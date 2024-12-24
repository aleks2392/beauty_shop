import React, { FC, useState } from "react";
import styles from "./productCard.module.css";
import productIcon from "../../../public/assets/img/productIcon.png";
import thumbnail from "../../../public/assets/img/thumbnail.png";

export const ProductCard: FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className={styles.productCardContainer}>
      {/* Image Section */}
      <div className={styles.imageSection}>
        <div className={styles.mainImage}>
          <img src={productIcon} alt="Main Product" />
        </div>
        <div className={styles.thumbnailContainer}>
          <img className={styles.thumbnail} src={thumbnail} alt="thumbnail 1" />
          <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail 2" />
          <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail 3" />
          <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail 4" />
          <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail 5" />
        </div>
      </div>

      {/* Product Info Section */}
      <div className={styles.infoSection}>
        <div className={styles.titleSection}>
          <h1>Dewy Glow Jelly Cream</h1>
          <div className={styles.ratingContainer}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={styles.star}></div>
              ))}
            </div>
            <span className={styles.reviews}>3 reviews</span>
          </div>
          <p className={styles.price}>$26.00</p>
        </div>
        <div className={styles.descriptionSection}>
          <p>
            A gel moisturizer packed with glow-boosting Cherry Blossom Extracts,
            visibly brightening niacinamide, and hydrating betaine from sugar
            beets. Advanced with glycerin and Cherry Blossom flavonoids with
            visibly soothing and moisturizing benefits for skin that’s ready for
            makeup! Dermatologist tested.
          </p>
          <p>Size: 50 ml</p>
        </div>
        <div className={styles.recommendationSection}>
          <p>RECOMMENDED FOR:</p>
          <div className={styles.recommendations}>
            <div>All Skin Types</div>
            <div>Combo to Dry</div>
            <div>Dryness</div>
          </div>
        </div>
        <div className={styles.actionSection}>
          <button className={styles.addToCartButton}>Add To Cart</button>
          <button className={styles.wishlistButton}>❤️</button>
        </div>

        {/* Accordion Sections */}
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <button
              onClick={() => toggleSection("good")}
              className={styles.accordionButton}
            >
              WHAT MAKES IT GOOD
            </button>
            {expanded === "good" && (
              <div className={styles.accordionContent}>
                <p>
                  A clear, water-jelly cream with Cherry Blossom and Niacinamide
                  that delivers a burst of hydration and glow for visibly
                  brighter, dewy skin.
                </p>
                <p>
                  <strong>Key Ingredients:</strong>
                </p>
                <ul>
                  <li>Cherry Blossom Flavonoids: visibly soothing</li>
                  <li>Niacinamide: visibly brightening</li>
                  <li>Sugar Beet Betaine: hydrating</li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.accordionItem}>
            <button
              onClick={() => toggleSection("ingredients")}
              className={styles.accordionButton}
            >
              INGREDIENTS
            </button>
            {expanded === "ingredients" && (
              <div className={styles.accordionContent}>
                <p>Full list of ingredients will go here.</p>
              </div>
            )}
          </div>
          <div className={styles.accordionItem}>
            <button
              onClick={() => toggleSection("howToUse")}
              className={styles.accordionButton}
            >
              HOW TO USE
            </button>
            {expanded === "howToUse" && (
              <div className={styles.accordionContent}>
                <p>
                  Apply to clean skin in the morning and evening. Massage gently
                  until fully absorbed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
