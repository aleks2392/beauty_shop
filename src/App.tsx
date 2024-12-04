/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './App.css';
import Header from './layout/Header/Header'
import {Banner} from './components/banner/Banner';
import NewArrivals from './components/NewArrivals';
import BestSallers from './components/BestSallers';
import BlossomGlowKit from './components/BlossomGlowKit'
import BlossomIMG1 from '../public/assets/img/BlossomIMG1.svg';
import BlossomIMG2 from '../public/assets/img/BlossomIMG.svg';
import Blog from './components/Blog'
import Quiz from './components/BannerSkinQuiz'
import InstSection from "./components/InstSection"
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <NewArrivals/>
    <BestSallers/>
    <BlossomGlowKit
        title="Blossom Glow Kit"
        description="Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types, vegan, cruelty-free, eco-friendly."
        image={BlossomIMG1} reverse={undefined}/>
    <BlossomGlowKit
        title="Floral Essence Masks Sets"
        description="Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine."
        image={BlossomIMG2}
        reverse
    />
    <Blog/>
    <Quiz/>
    <InstSection/>
    <Footer/>
    </>
  );
}

export default App;
