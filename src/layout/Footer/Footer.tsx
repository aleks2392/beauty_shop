/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import './footer.css';
import facebook from '../../../public/assets/img/facebook.png'
import pinterst from '../../../public/assets/img/pinterst.png'
import twitter from '../../../public/assets/img/twitter.png'
import instagram from '../../../public/assets/img/instagram.png'
import telegram from '../../../public/assets/img/telegram.png'


function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer-section social-icons">
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
      <div className="footer-main">
        <div className="footer-section company-info">
          <h3><span className="brand-name">Bloom</span> Beauty</h3>
          <p>Discover nature&#39;s beauty with our natural care products.</p>
          <p>
            <span>📞 +38 050 123 45 67</span><br />
            <span>📧 bloombt@gmail.com</span><br />
            <span>📍 Kyiv, Ukraine</span>
          </p>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>My Account</h3>
          <ul>
            <li><a href="#">Addresses</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Wishlist</a></li>
          </ul>
        </div>

        <div className="footer-section third">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#">About us</a></li>
          </ul>
        </div>

        <div className="footer-section footer-subscribe">
          <h3>Sign Up for Emails</h3>
          <p>Stay informed, subscribe to our newsletter now!</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email" />
            <a className="subscribe-form-link">Subscribe →</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Bloom Beauty</p>
        <div className="footer-links">
          <a className="footer-link" href="#">Privacy Policy</a>
          <a className="footer-link" href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
