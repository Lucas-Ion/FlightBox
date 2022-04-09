import { useState } from "react";
import "./homePage.css";
const HomePage = ({ setSigningUp }) => {
  return (
    <div>
      <div
        className="home-page-background-image-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.1), rgba(255,255,255,0)), url('https://wallpaperaccess.com/full/254381.jpg')`
        }}
      />
      <div className="home-page-content">
        <div className="home-page-welcome-text-container">
          <div className="home-page-welcome-text display-4 text-light">Welcome to FlightBox.</div>
          <div className="home-page-welcome-text text-light">
            Where the world connects through Flight
          </div>
          <div className="home-page-welcome-text"></div>
        </div>
        <div
          className="btn btn-lg  btn-outline-light p-2 home-page-sign-up-button"
          onClick={() => {
            setSigningUp(true);
          }}
          style={{ width: "7rem" }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default HomePage;
