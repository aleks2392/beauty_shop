
import React from 'react';
import '../styles/blossom.css';

interface BlossomGlowKitProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const BlossomGlowKit: React.FC<BlossomGlowKitProps> = ({ title, description, image, reverse }) => {
  return (
    <section className={`blossom-glow-kit ${reverse ? 'reverse' : ''}`}>
      <div className="content">
        <div className="text-section">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="tags">
            <span className="tag">#soothing</span>
            <span className="tag">#nourishing</span>
            <span className="tag">#ingredients</span>
            <span className="tag">#ingredients</span>
            <span className="tag">#ingredients</span>
          </div>
          <div className="buttons">
            <a href="/" className="shop-now">Shop Now</a>
            <a href="/" className="explore-more">Explore More →</a>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default BlossomGlowKit;
