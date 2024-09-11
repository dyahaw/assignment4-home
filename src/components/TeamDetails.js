import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PeopleContext } from '../context/PeopleContext';

const TeamDetails = () => {
  const { id } = useParams();
  const { people } = useContext(PeopleContext);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const personDetails = people.find((p) => p.id === parseInt(id));
    setPerson(personDetails);
  }, [id, people]);
  useEffect(() => {
    console.log("TeamDetails rendered with ID:", id);
    console.log("People data:", people);
    const personDetails = people.find((p) => p.id === parseInt(id));
    console.log("Person details:", personDetails);
    setPerson(personDetails);
  }, [id, people]);


  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Detail Team</h2>
      <img src={person.photo} alt={person.name} style={{ width: '150px', height: '150px' }} />
      <p>Name: {person.name}</p>
      <p>University: {person.university}</p>
      <p>Email: {person.email}</p>
      <p>Instagram: <a href={person.instagram} target="_blank" rel="noopener noreferrer">{person.instagram}</a></p>
      <p>LinkedIn: <a href={person.linkedin} target="_blank" rel="noopener noreferrer">{person.linkedin}</a></p>
    </div>
  );
};

export default TeamDetails;
