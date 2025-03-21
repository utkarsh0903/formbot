import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import heroBanner from "../assets/heroBanner.png";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import logo from "../assets/Logo.png";
import shareLink from "../assets/ShareLink.png";
import blueBgBlur from "../assets/blueBgBlur.png";
import orangeBgBlur from "../assets/orangeBgBlur.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h4>FormBot</h4>
        </div>
        <div className="right-navbar">
          <button className="signin-btn">
            <Link to="/login" className="signin-link">
              Sign in
            </Link>
          </button>
          <button className="register-btn">
            <Link to="/register" className="register-link">
              Create a FormBot
            </Link>
          </button>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-top-container">
          <img className="hero-1" src={hero1} alt="Hero Image 1" />
          <div className="hero-content">
            <div className="hero-heading">
              <h1>Build advanced chatbots visually</h1>
            </div>
            <div className="hero-subheading">
              <p>
                Typebot gives you powerful blocks to create unique chat
                experiences. Embed them anywhere on your web/mobile apps and
                start collecting results like magic.
              </p>
            </div>
            <div className="hero-btn">
              <button className="register-btn">
                <Link className="register-link" to="/register">Create a FormBot for free</Link>
              </button>
            </div>
          </div>
          <img className="hero-2" src={hero2} alt="Hero Image 2" />
        </div>
        <div className="hero-section-image">
          <img className="orng-blur" src={orangeBgBlur} alt="Orange Blur" />
          <img className="blue-blur" src={blueBgBlur} alt="Blue Blur" />
          <img className="hero-banner" src={heroBanner} alt="Detailed Banner" />
        </div>
      </div>
      <div className="landing-footer">
        <div className="left-navbar">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <h4>FormBot</h4>
          </div>
          <div className="footer-cuvette">
            <p>Made with ❤️ by <br /><span>@cuvette</span></p>
          </div>
        </div>
        <div className="product-navbar">
          <div className="navbar-title">
            <h3>Product</h3>
          </div>
          <div className="navbar-content">
            <ul>
              <li>
                Status<img src={shareLink} alt="Share" />
              </li>
              <li>
                Documentation<img src={shareLink} alt="Share" />
              </li>
              <li>
                Roadmap<img src={shareLink} alt="Share" />
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="community-navbar">
          <div className="navbar-title">
            <h3>Community</h3>
          </div>
          <div className="navbar-content">
            <ul>
              <li>
                Discord<img src={shareLink} alt="Share" />
              </li>
              <li>
                GitHub repository<img src={shareLink} alt="Share" />
              </li>
              <li>
                Twitter<img src={shareLink} alt="Share" />
              </li>
              <li>
                LinkedIn<img src={shareLink} alt="Share" />
              </li>
              <li>OSS Friends</li>
            </ul>
          </div>
        </div>
        <div className="company-navbar">
          <div className="navbar-title">
            <h3>Company</h3>
          </div>
          <div className="navbar-content">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
