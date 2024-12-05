import React from "react";
import styles from './BannerQuiz.module.css';
import mask from '../../../public/assets/img/mask.svg';
import { Button } from '../../ui/Button';

const SkinQuiz = () => {
  return (
    <section className={styles.skinQuiz}>
      <div className={styles.skinQuizContent}>
        <div className={styles.skinQuizImage}>
          <img src={mask} alt="Skin Quiz" />
        </div>
        <div className={styles.skinQuizText}>
          <h2>The Skin Quiz</h2>
          <p>
            Meet the quiz that will curate a routine just as unique as you are.
          </p>
          <Button
            className={styles.exploreButton}
            onClick={() => {
              alert("quiz");
            }}
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkinQuiz;
