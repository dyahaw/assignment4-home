import React, { createContext, useState } from 'react';
import dyahFoto from '../assets/images/dyahayuw.jpg';
import cewek from '../assets/images/female.png';
import cowok from '../assets/images/male.png';
export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people] = useState([
    {
        id: 1,
        name: "Dyah Ayu Wulandari",
        university: "Universitas Brawijaya",
        email: "ayuwulandaridyah1@gmail.com",
        usecase: "Bigbox 5",
        instagram: "https://instagram.com/dyahaw_",
        linkedin: "https://linkedin.com/in/dyahayuw",
        photo: dyahFoto
      },
      {
        id: 2,
        name: "Echa Andrea Gustiar",
        university: "Universitas Lampung",
        email: "echaandrea6603@gmail.com",
        usecase: "Bigbox 5",
        instagram: "https://www.instagram.com/echreaa?igsh=MWNwcHFkZ3prZ3R3dQ== ",
        linkedin: "https://www.linkedin.com/in/echa-andrea-gustiar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        photo: cewek
      },
      {
        id: 3,
        name: "Rachel Valentina Selima",
        university: "Universitas Katolik Soegijapranata Semarang",
        usecase: "Antares 1",
        email: "22k30008@student.unika.ac.id",
        instagram: "https://www.instagram.com/y0ur.valent_?igsh=MWN6cG1jMHhmazRibQ==",
        photo: cewek
      },
      {
        id: 4,
        name: "Zidane Putra Fadilah",
        university: "universitas Sriwijaya",
        usecase: "Antares 1",
        email: "zidaneputraf@gmail.com",
        instagram: "https://www.instagram.com/zidanepf?igsh=MTZ1dWljdW9nZnl4cQ==",
        linkedin: "http://www.linkedin.com/in/zidanepf",
        photo: cowok
      },
      {
        id: 5,
        name: "Augrecelline",
        university: "Binus University",
        usecase: "Antares 2",
        email: "cellineisme@gmail.com",
        instagram: "https://www.instagram.com/cellineisme/profilecard/?igsh=MTYwYjBnNzA5MGQyaw==",
        linkedin: "http://linkedin.com/in/augrecelline-ab3945317",
        photo: cewek
      },
      {
        id: 6,
        name: "Ilham Ramadhan",
        university: "STMIK Sinar Nusantara",
        usecase: "Antares 2",
        email: "ilhamram332@gmail.com",
        linkedin: "https://www.linkedin.com/in/ilramadhan",
        photo: cowok
      },
      {
        id: 7,
        name: "I Nengah Danarsa Suniadevta",
        university: "Universitas Udayana",
        usecase: "Antares 3",
        email: "devtadanarsa69@gmail.com",
        instagram: "https://www.instagram.com/devtadanarsa?igsh=MWgwcnNlY2xiMHBpbw%3D%3D&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/i-nengah-danarsa-suniadevta",
        photo: cowok
      },
      {
        id: 8,
        name: "Gilang Wiko Wicaksono",
        university: "Universitas Muhammadiyah Riau",
        usecase: "Antares 3",
        email: "gilang.ikoo15@gmail.com",
        linkedin: "https://www.linkedin.com/in/gilangikoo/",
        photo: cowok
      },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <PeopleContext.Provider value={{ people, isLoggedIn, login, logout }}>
      {children}
    </PeopleContext.Provider>
  );
};