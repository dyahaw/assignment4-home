import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import CardList from "../components/CardList";
import TeamDetails from "../components/TeamDetails";
import { PeopleContext } from '../context/PeopleContext';

const MyTeam = () => {
  const { isLoggedIn } = useContext(PeopleContext);

  if (!isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/team/:id" element={<TeamDetails />} />
      </Routes>
    </div>
  );
};

export default MyTeam;
