import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Card.css";


const Card = ({ person }) => {
  return (
    <div className="card">
      <img src={person.photo} alt={person.name} className="profile-photo" />
      <div className="card-content">
        <h2>{person.name}</h2>
        <p>{person.university}</p>
        <p>{person.usecase}</p>
        <a href={`mailto:${person.email}`} className="email">{person.email}</a>
        <div className="social-links">
          {person.instagram && (
            <a href={person.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          )}
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
