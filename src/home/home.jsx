import "./home.css";
import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  // }
  render() {
    return (
      <div className="container">
        <div className="container-left">
          <h1>
            <span className="movie">Mengenal</span> Marvel App
          </h1>
          <p >
            Selamat datang di Marvel App, tempat terbaik untuk mengakses dan
            mengeksplorasi seluruh dunia Marvel Cinematic Universe (MCU)! Marvel
            App adalah platform yang didedikasikan untuk para penggemar super
            hero, menawarkan pengalaman menyeluruh untuk menikmati daftar film-film
            epik dari Marvel.
          </p>
          <div className="btntelusur">
            <NavLink to="/daftarfilm">
              <button className="btn btn-primary">Telusuri</button>
            </NavLink>
          </div>
        </div>
        <div className="container-right">
          <img src="/public/images/logo.jpg" alt="movie" />
        </div>
      </div>
    );
  }
}

export default Home;
