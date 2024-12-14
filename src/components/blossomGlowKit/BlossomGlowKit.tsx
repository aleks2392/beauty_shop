import React from "react";
import blossomStyles from "./Blossom.module.css";
import { Button } from "../../ui/Button";

interface BlossomGlowKitProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const BlossomGlowKit: React.FC<BlossomGlowKitProps> = ({
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <section
      className={`${blossomStyles.blossomGlowKit} ${
        reverse ? blossomStyles.reverse : ""
      }`}
    >
      <div className={blossomStyles.blossomContent}>
        <div className={blossomStyles.textSection}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={blossomStyles.tags}>
            <span className={blossomStyles.tag}>#soothing</span>
            <span className={blossomStyles.tag}>#nourishing</span>
            <span className={blossomStyles.tag}>#ingredients</span>
            <span className={blossomStyles.tag}>#hydration</span>
            <span className={blossomStyles.tag}>#glow</span>
          </div>
          <div className={blossomStyles.buttons}>
            <Button label="Shop Now" className="pink medium"></Button>
            <a href="/" className={blossomStyles.exploreMore}>
              Explore More →
            </a>
          </div>
        </div>
        <div className={blossomStyles.imageSection}>
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default BlossomGlowKit;
