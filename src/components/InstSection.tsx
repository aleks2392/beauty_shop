/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../styles/inst.css';
import iamageInst from '../../public/assets/img/soft_finish.png'
import {Button} from '../ui/Button';


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
      <div className="gallery-container">
      <header className="gallery-header">
        <span>SHARE HOW YOU BLOSSOMED WITH </span>
        <span className="hashtag">#BLOOMBEAUTY</span>
      </header>
      <div className="gallery-subheader">
        <a href="#">See All</a>
      </div>
      <div className="gallery-images">
        {images.map((src, index) => (
          <div className="gallery-image" key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
            <div className="overlay">
              <Button className="overlay-button" onClick={() => {alert("instagram")}}>See In</Button>
              <Button className="overlay-button" onClick={() => {alert("buy now")}}>Buy Now</Button>
            </div>
          </div>
        ))}
      </div>
      <Button className="gallery-button" onClick={() => {alert("Follow Us")}}>Follow Us</Button>
    </div>
  );
};

export default InstagramSection;
