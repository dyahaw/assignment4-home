import React from 'react';
import './AboutMe.css';
import profilePhoto from '../assets/images/dyahayuw.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src={profilePhoto} alt="Profile" className="about-me-photo" />
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
          Hello! My name is Dyah Ayu Wulandari.
        </p>
        <p>
          I am a fresh graduate of Informatics Engineering from Universitas Brawijaya
          with expertise in machine learning and data analytics. I am skilled in tools such as Google BigQuery, Tableau, Google Data Studio, and Microsoft Excel.
        </p>
        <p>
          My projects primarily focus on data science, but I am also keenly interested in business analytics and business intelligence. I strive to apply data science in real-world business scenarios.
        </p>
        <p>
          Check out my <a href="https://www.canva.com/design/DAGPBHb4yq8/D_Zcau9vTmAHI6nHIuODmA/view?utm_content=DAGPBHb4yq8&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">portfolio</a> to see more of my work.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dyahayuw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/dyahaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:ayuwulandaridyah1@gmail.com" aria-label="Email">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
