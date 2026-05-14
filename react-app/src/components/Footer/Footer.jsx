import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      {/* Секция подписки с бежевым фоном */}
      <div className="newsletter-box">
        <div className="newsletter-inner">
          <h2>Join in and get 15% off!</h2>
          <p>Subscribe to our newsletter to get 15% off discount code.</p>
          
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-with-icon">
              <span className="email-icon">✉</span>
              <input type="email" placeholder="Email address" required />
            </div>
            <button type="submit" className="sub-button">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Черная секция со ссылками */}
      <div className="footer-dark-area">
        <div className="footer-main-grid">
          
          <div className="footer-logo-section">
            <h1 className="brand-logo">COFFEE</h1>
          </div>

          <div className="footer-links-container">
            <div className="footer-column">
              <h4>PRIVACY</h4>
              <a href="#">Terms of use</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookies</a>
            </div>

            <div className="footer-column">
              <h4>SERVICES</h4>
              <a href="#">Shop</a>
              <a href="#">Order ahead</a>
              <a href="#">Menu</a>
            </div>

            <div className="footer-column">
              <h4>ABOUT US</h4>
              <a href="#">Find a location</a>
              <a href="#">About us</a>
              <a href="#">Our story</a>
            </div>

            <div className="footer-column">
              <h4>INFORMATION</h4>
              <a href="#">Plans & pricing</a>
              <a href="#">Sell your products</a>
              <a href="#">Jobs</a>
            </div>

            <div className="footer-column">
              <h4>SOCIAL MEDIA</h4>
              <div className="social-icons">
                <span>𝕏</span>
                <span>📸</span>
                <span>ⓕ</span>
                <span>🅘🅝</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}