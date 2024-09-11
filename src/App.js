import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header";
import { PeopleProvider } from './context/PeopleContext';
import "./App.css";
import MyTeam from "./pages/MyTeam";
import TeamDetails from "./components/TeamDetails";
import MovieList from "./pages/MovieList";
import FavoritesPage from './pages/FavoritesPage';

import livingIntelkomLogo from './livingin-telkom.png';
import digistarClassLogo from './digi.png';
import telkomIndonesiaLogo from './telind.png';

function App() {
  return (
    <PeopleProvider> {}
      <Router>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/team/*" element={<MyTeam />} />
            <Route path="/team/:id" element={<TeamDetails />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>

          <div className="logos">
            <img src={livingIntelkomLogo} alt="Living Intelkom Logo" className="logo-livingintelkom" />
            <img src={digistarClassLogo} alt="Digistar Class Logo" className="logo-digistarclass" />
            <img src={telkomIndonesiaLogo} alt="Telkom Indonesia Logo" className="logo-telkomindonesia" />
          </div>
          <div className="logos-left-bottom">
            <span className="author-text">oleh Dyah Ayu Wulandari</span>
          </div>
        </div>
      </Router>
    </PeopleProvider>
  );
}

export default App;
