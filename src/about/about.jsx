import React from "react";
import "./About.css";
import Bangbar from "../Navbar/Navbar";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <img
            src="https://avatars.githubusercontent.com/u/82706711?v=4"
            alt="profile"
          />
          <p>Rosyad Shidqi Dikpimmas</p>
          <div className="">21120120140161</div>
          <div className="">Mahasiswa</div>
          <p className="prak">Praktikum RPLBK 2023</p>
        </div>
        <div className="about">
          <img
            src="https://avatars.githubusercontent.com/u/73371159?v=4"
            alt="profile"
          />
          <p>Nabila Hana Saphira</p>
          <div className="">21120120140112</div>
          <div className="student">Mahasiswa</div>
          <p className="prak">Praktikum RPLBK 2023</p>
        </div>
        <div className="about">
          <img
            src="https://avatars.githubusercontent.com/u/82258855?v=4"
            alt="profile"
          />
          <p>Fajar Yumna Adani </p>
          <div className="">21120120130128</div>
          <div className="student">Mahasiswa</div>
          <p className="prak">Praktikum RPLBK 2023</p>
        </div>
        <div className="about">
          <img
            src="https://avatars.githubusercontent.com/u/85113470?v=4"
            alt="profile"
          />
          <p>Febian Haydar Pratama</p>
          <div className="">21120120120006</div>
          <div className="student">Mahasiswa</div>
          <p className="prak">Praktikum RPLBK 2023</p>
        </div>
        <Bangbar />
      </div>
    );
  }
}

export default About;
