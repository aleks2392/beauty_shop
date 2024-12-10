import React from "react";
import { Banner } from "../components/banner/Banner";
import NewArrivals from "../components/newArrivals/NewArrivals";
import BestSallers from "../components/bestSallers/BestSallers";
import BlossomGlowKit from "../components/blossomGlowKit/BlossomGlowKit";
import BlossomIMG1 from "../../public/assets/img/BlossomIMG1.svg";
import BlossomIMG2 from "../../public/assets/img/BlossomIMG.svg";
import Blog from "../components/blog/Blog";
import Quiz from "../components/bannerSkinQuiz/BannerSkinQuiz";
import InstSection from "../components/instSection/InstSection";
import RegistrationForm from "../components/registrationForm/RegistrationForm";

export function HomePage() {
  return (
    <>
      {/* <RegistrationForm /> */}
      <Banner />
      <NewArrivals />
      <BestSallers />
      <BlossomGlowKit
        title="Blossom Glow Kit"
        description="Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types, vegan, cruelty-free, eco-friendly."
        image={BlossomIMG1}
      />
      <BlossomGlowKit
        title="Floral Essence Masks Sets"
        description="Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine."
        image={BlossomIMG2}
        reverse
      />
      <Blog />
      <Quiz />
      <InstSection />
    </>
  );
}

export default HomePage;
