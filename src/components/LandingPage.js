import React from "react";
import { Link } from "react-router-dom";
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="home-container">
      {/* Left Purple Section */}
      <div className="home-left">
        <div className="home-content">
          <div className="icon mb-3">
            <i className="fa-solid fa-pen-to-square fa-3x text-white"></i>
          </div>
          <h2 className="home-title">NOTE.LY - Notes on Cloud</h2>
          <p className="home-desc">
            NOTE.LY is an online platform to save all your notes at one place
            on the cloud and access them anywhere anytime. It is a platform where
            your notes are totally encrypted and secured so that no one except
            you can access your notes.
          </p>

          <div className="home-links mt-4">
            <Link to="/signup" className="home-link">
              Create a new account ➤
            </Link>
            <br />
            <Link to="/login" className="home-link">
              Login to your account ➤
            </Link>
            <br />
            <Link to="/about" className="home-link">
              Know More ➤
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="home-right"></div>
    </div>
  );
};

export default LandingPage;
