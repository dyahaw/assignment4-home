import React from 'react';
import './Home.css';
import digistarImage from '../assets/digistarclass.jpg';

const Home = () => {
  const handleJoinNow = () => {
    window.open('https://www.digistartelkom.id/', '_blank');
  };

  return (
    <div className="home-container">
      <div className="home-image">
        <img src={digistarImage} alt="Digistar Class" />
      </div>
      <div className="home-description">
        <h1>Digistarclass by Telkom Indonesia</h1>
        <p>
          Digistar Class is a mentoring program from Telkom Indonesia to prepare future digital talents. This program aims to close the gap between industry needs and the number of digital talents.
        </p>
        <p>
          Several things are done in the Digistar Class program, namely:
        </p>
        <ul>
          <li>Training hard skills and soft skills needed in the digital industry.</li>
          <li>Accompanying participants with Telkom professional mentors who are experts in their fields.</li>
          <li>Preparing young people to explore the world of work.</li>
          <li>Improving digital skills.</li>
        </ul>
        <p>
          The Digistar Class program is open to students, fresh graduates, digital communities, and diasporas.
        </p>
        <button onClick={handleJoinNow} className="cta-button">Join Now!</button>
      </div>
    </div>
  );
};

export default Home;
