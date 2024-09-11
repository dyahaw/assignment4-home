import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./TableView.css";

const TableView = ({ people }) => {
  return (
    <table className="table-view">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>University</th>
          <th>Usecase</th>
          <th>Email</th>
          <th>Instagram</th>
          <th>LinkedIn</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index}>
            <td><img src={person.photo} alt={person.name} className="table-photo" /></td>
            <td>{person.name}</td>
            <td>{person.university}</td>
            <td>{person.usecase}</td>
            <td><a href={`mailto:${person.email}`}>{person.email}</a></td>
            <td>
              {person.instagram && (
                <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              )}
            </td>
            <td>
              {person.linkedin && (
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
