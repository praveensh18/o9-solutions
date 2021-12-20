import React from "react";
import "./Introduction.css";

class Introduction extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="content sub-section">
          <h1>o9 Digital Brain</h1>
          <p className="sub-description">
            Integrated planning, analytics, and data platform transforming
            supply chain, revenue, and P&L decision-making at global enterprises
            for digital age speed and scale.
          </p>
          <a href="https://o9solutions.com/" className="learn-more">Learn more</a>
        </div>
        <div className="video-header sub-section">
          <video className="video-player" preload="auto" loop autoPlay muted>
            <source
              src="https://o9solutions.com/wp-content/uploads/2021/08/EKG-3D-cube-animation-5.mp4"
              type="video/mp4"
            />
            
          </video>
        </div>
        
        <div className="hero-logos">
            <p>Trusted by leaders across industry verticals.</p>
            <img className="logos-img" src="https://o9solutions.com/wp-content/uploads/2021/05/logos-home-2.svg" alt="comapny logos" />
        </div>
      </section>
    );
  }
}

export default Introduction;
