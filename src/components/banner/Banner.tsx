import {Button} from '../../ui/Button';
import styles from './index.module.css';

export const Banner = () => {
    return (
    <>
    <section className="first-screen">
      <div className="rectangle-2"></div>
      <div
        className={styles.rectangle3}
      ></div>
      <div className="banner-content">
        <h1>DISCOVER YOUR INNER BEAUTY<br />WITH BLOSSOM GLOW KIT</h1>
        <p>Great gift for yourself and loved ones</p>
        <Button className="banner-button" onClick={()=>{alert('Working')}}>Shop Now</Button>
      </div>
    </section>
    </>
  );
}
