import Navbar from "../components/Navbar";
import styles from "./About.module.css";
import {useState, useEffect } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function About() {
  const [movie, setMovie] = useState("");

    const url = "https://image.tmdb.org/t/p/original";
  const randomMoviesNumber = [
    "299536",
    "438631",
    "157336",
    "19995",
    "385687",
    "120467",
    "385687",
    "8587",
    "101",
    "458156",
    "278",
    "1667",
  ];
  useEffect(() => {
    const randomPhoto = Math.floor(Math.random() * 12);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${randomMoviesNumber[randomPhoto]}?api_key=${API_KEY}&language=fr&include_adult=false`
      )
      .then((data) => {
        setMovie(data.data);
      })
      .catch((err) =>
        err.response.status === 404 ? navigate("/not-found") : null
      );
  }, []);
  if (!movie) return null;
  return (
    <>
    <div className={styles.navbarAbout}>
      <Navbar />
      </div>
      <div className={styles.aboutbody} >
      <img
              className={styles.picturePoster}
              src={`${url}${movie.poster_path}`}
              alt={movie.orginal_title}
            />
      <div className={styles.aboutContainer}>
        <h2> Welcome to Movie+ !</h2> <br></br>
        <p>
          We have created a user-friendly platform where you can explore a huge
          collection of captivating movie posters. Whether you are an avid movie
          buff or simply looking for a enjoyable movie night, Movie+ is there
          for you.
          <br></br> <br></br>
          When you browse our site, you will discover several movie posters from
          of the most popular and varied genres.
          <br></br> <br></br>
          We also provide you with detailed information about every movie
          including ratings, release date and details essential.
          <br></br> <br></br>At Movie+, we make a point of honor to offer you
          the best possible experience. We put to regularly updates our film
          library to keep you informed of the latest releases and timeless
          classics.<br></br> <br></br>
          Good viewing !
        </p>
      </div>
      </div>
    </>
  );
}
