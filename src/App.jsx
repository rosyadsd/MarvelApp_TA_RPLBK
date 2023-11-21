import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./about/about";
import LoginPage from "./LoginPage/Page";
import Bangbar from "./Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { FilmProvider } from "./api/Film";
import Home from "./home/home";
import Main from "./daftarfilm/daftarfilm";
import Details from "./detailpage/detailpage";

function App() {
  const [loginStat, changeLoginStat] = useState(() => {
    const storedLoginStat = localStorage.getItem("loginStat");
    return storedLoginStat ? JSON.parse(storedLoginStat) : false;
  });

  useEffect(() => {
    localStorage.setItem("loginStat", JSON.stringify(loginStat));
  }, [loginStat]);
  // console.log(loginStat);

  const handleLogout = () => {
    changeLoginStat(false);
  };

  return (
    <>
      {loginStat ? (
        <Router>
          <Bangbar onClickFunc={handleLogout} />
          <FilmProvider>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/daftarfilm" element={<Main />} />
              <Route path="/daftarfilm/:id" element={<Details />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </FilmProvider>
        </Router>
      ) : (
        <LoginPage
          onLogin={() => {
            changeLoginStat(true);
          }}
        />
      )}
    </>
  );
}

export default App;
