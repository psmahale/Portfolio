import React from 'react';
import profileImage from '../assets/DP2.jpg'; // Adjust path if needed
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <div className="home-content">
          <h1 className="home-title">
            Hello, I'm <span className="highlight">Pranav Mahale</span>
          </h1>
          <p className="home-subtitle">Professional Title</p>
          <p className="home-description">
            I create modern, responsive websites and web applications with focus on 
            user experience and clean code. Let's build something amazing together.
          </p>
          <div className="home-buttons">
            <a href="#portfolio" className="btn btn-primary">
              Get My Cv
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;