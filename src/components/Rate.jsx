import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Rate.module.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Rate() {
  const { id } = useParams();

  const [rate, setRate] = useState([]);

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: "",
  };

  const handleRate = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRate(response))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className={styles.starsContainer}>
        <h3>Add a rate : </h3>
        <div className={styles.stars}>
          <div onClick={handleRate} type="submit">
            1⭐
          </div>
          <div onClick={handleRate} type="submit">
            2⭐
          </div>
          <div onClick={handleRate} type="submit">
            3⭐
          </div>
          <div onClick={handleRate} type="submit">
            4⭐
          </div>
          <div onClick={handleRate} type="submit">
            5⭐
          </div>
        </div>
      </div>
    </>
  );
}
