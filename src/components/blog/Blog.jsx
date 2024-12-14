/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import styles from "./Blog.module.css";
import blogImg from "../../../public/assets/img/blog.svg";
import flowerLeft from "../../../public/assets/img/leftFlower.png";
import flowerRight from "../../../public/assets/img/rightFlower.png";
import { Button } from "../../ui/Button";

const articles = [
  {
    id: 1,
    title: "Cracking the Coconut Code",
    description:
      "Reveal your skin’s natural glow with our Lotus Glow Kit. Nourishing body and face creams",
    image: "https://link-to-image1.com",
  },
  {
    id: 2,
    title: "Bloom Beauty Best of 2023",
    description: "Bloom Beauty Best of 2023 products winners are here.",
    image: "https://link-to-image2.com",
  },
  {
    id: 3,
    title: "7 Skincare Habits to Break Now",
    description:
      "Great skincare is a long game—it doesn’t happen overnight, but little steps are made...",
    image: "https://link-to-image3.com",
  },
];

const Blog = () => {
  return (
    <section className={styles.onTheBlog}>
      <header className={styles.onTheBlogHeader}>
        <div className={styles.titleBlog}>
          <img src={flowerRight} alt="flower" />
          <h2>On the Blog</h2>
          <img src={flowerLeft} alt="flower" />
        </div>
        <a href="/blog" className={styles.seeAllLink}>
          See All
        </a>
      </header>
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <img
              src={blogImg}
              alt={article.title}
              className={styles.articleImage}
            />
            <div className={styles.articleContent}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <Button label="Read More" className="transparent large"></Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
