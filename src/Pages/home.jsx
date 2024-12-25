import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-nav-bar">
        <div className="logo">
          <img src="" alt="" />
          <h4>FormBot</h4>
        </div>
        <div className="right-nav-bar">
          <button>
            <Link to="/login">Sign in</Link>
          </button>
          <button>
            <Link to="/register">Create a FormBot</Link>
          </button>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-top-container">
          <img src="" alt="" />
          <img src="" alt="" />
          <div className="hero-heading">
            <h1>Build advanced chatbots visually</h1>
          </div>
          <div className="hero-subheading">
            <p>
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </p>
          </div>
          <div className="hero-button">
            <button>
              <Link to="/register">Create a FormBot for free</Link>
            </button>
          </div>
        </div>
        <div className="hero-section-image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="left-navbar">
          <div className="footer-logo">
            <img src="" alt="" />
            <h4>FormBot</h4>
          </div>
          <div className="footer-cuvette">
            <p>Made with ❤️ by @cuvette</p>
          </div>
        </div>
        <div className="product-navbar">
          <div className="navbar-title">
            <h3>Product</h3>
          </div>
          <div className="navbar-content">
            <ul>
              <li>
                Status <svg></svg>
              </li>
              <li>
                Documentation <svg></svg>
              </li>
              <li>
                Roadmap <svg></svg>
              </li>
              <li>
                Pricing
              </li>
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
                Discord <svg></svg>
              </li>
              <li>
                GitHub repository <svg></svg>
              </li>
              <li>
                Twitter <svg></svg>
              </li>
              <li>
                LinkedIn <svg></svg>
              </li>
              <li>
                OSS Friends 
              </li>
            </ul>
          </div>
        </div>
        <div className="company-navbar">
          <div className="navbar-title">
            <h3>Company</h3>
          </div>
          <div className="navbar-content">
            <ul>
              <li>
                About
              </li>
              <li>
                Contact
              </li>
              <li>
                Terms of Service
              </li>
              <li>
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
