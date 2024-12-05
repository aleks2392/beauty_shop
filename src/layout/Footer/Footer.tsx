import React from "react";
import footerStyles from './Footer.module.css';
// @ts-expect-error" // eslint-line
import facebook from '../../../public/assets/img/facebook.png'
// @ts-expect-error" // eslint-line
import pinterst from '../../../public/assets/img/pinterst.png'
// @ts-expect-error" // eslint-line
import twitter from '../../../public/assets/img/twitter.png'
// @ts-expect-error // eslint-line
import instagram from '../../../public/assets/img/instagram.png'
// @ts-expect-error" // eslint-line
import telegram from '../../../public/assets/img/telegram.png'


function Footer() {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={`${footerStyles.footerSection} ${footerStyles.socialIcons}`}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src={pinterst} alt="Pinterest" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="Telegram" />
        </a>
      </div>
      <div className={footerStyles.footerMain}>
        <div className={`${footerStyles.footerSection} ${footerStyles.companyInfo}`}>
          <h3>
            <span className={footerStyles.brandName}>Bloom</span> Beauty
          </h3>
          <p>Discover nature&#39;s beauty with our natural care products.</p>
          <p>
            <span>📞 +38 050 123 45 67</span>
            <br />
            <span>📧 bloombt@gmail.com</span>
            <br />
            <span>📍 Kyiv, Ukraine</span>
          </p>
        </div>
        <div className={footerStyles.footerSection}>
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
          </ul>
        </div>

        <div className={footerStyles.footerSection}>
          <h3>My Account</h3>
          <ul>
            <li>
              <a href="#">Addresses</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
          </ul>
        </div>

        <div className={`${footerStyles.footerSection} ${footerStyles.third}`}>
          <h3>Customer Care</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        <div className={`${footerStyles.footerSection} ${footerStyles.footerSubscribe}`}>
          <h3>Sign Up for Emails</h3>
          <p>Stay informed, subscribe to our newsletter now!</p>
          <div className={footerStyles.subscribeForm}>
            <input type="email" placeholder="Email" />
            <a className={footerStyles.subscribeFormLink}>Subscribe →</a>
          </div>
        </div>
      </div>

      <div className={footerStyles.footerBottom}>
        <p>&copy; 2023 Bloom Beauty</p>
        <div className={footerStyles.footerLinks}>
          <a className={footerStyles.footerLink} href="#">
            Privacy Policy
          </a>
          <a className={footerStyles.footerLink} href="#">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
