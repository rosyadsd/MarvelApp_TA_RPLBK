import { useEffect, useState } from "react";
import "./daftarfilm.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Bangbar from "../Navbar/Navbar";

function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios(
          "https://mcuapi.herokuapp.com/api/v1/movies"
        );
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // console.log(data);

  const renderList = () => {
    return (
      <div className="item-container" >
        {data.map((item, index) => {
          return (
            <div class="box" key={index}>
              <NavLink to={`/daftarfilm/${item.id}`}>
                <img class="img-list" src={item.cover_url} />
                <p class="name">{item.title}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Tidak Dapat Mendapatkan data, Silakan coba lagi lain kali
        </div>
      );
    }
  };

  return (
    <div className="render-container">
      <div style={{ marginBottom: '40px' }}></div>
      {renderError()}
      <h1 className="txt">
        <span className="span-txt">Marvel Movie List </span>
      </h1>
      {isLoading ? (
        <div className="loading-state">Please Wait...</div>
      ) : (
        <div className="render">{renderList()}</div>
      )}
      <Bangbar />
    </div>
  );
}

export default Main;
