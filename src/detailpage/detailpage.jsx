import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./detailpage.css";
import Bangbar from "../Navbar/Navbar";

export default function Details() {
  const [data, setData] = useState();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios(
          "https://mcuapi.herokuapp.com/api/v1/movies"
        );
        setData(results.data.data[id - 1]);
      } catch (err) {}
    };

    fetchData();
  }, [id]);
  console.log(data);

  return (
    <div className="distance mt-5">
      <p className="detail-title">
        Deskripsi
      </p>
      {data === undefined ? (
        <div className="loading-state">Please Wait...</div>
      ) : (
        <div className="detail">
          <img className="img" src={data.cover_url} alt="detail-img" />
          <div className="detail-item">
            <p className="infoname">Judul film : {data.title}</p>
            <p>Tanggal Rilis : {data.release_date}</p>
            <p>Durasi : {data.duration} Minutes</p>
            <p>Sisnopsis : {data.overview}</p>
          </div>
        </div>
      )}
      <Bangbar></Bangbar>
    </div>
  );
}
