import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await axios.get(
          "https://mcuapi.herokuapp.com/api/v1/movies"
        );
        setFilms(response.data);
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    fetchFilmData();
  }, []);

  return (
    <FilmContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmContext.Provider>
  );
};

export const useFilmContext = () => {
  const context = useContext(FilmContext);

  return context;
};
