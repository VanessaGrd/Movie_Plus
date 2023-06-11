import styles from "./MovieReference.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieReference() {
  const { id } = useParams();
  const [movieReference, setMovieReference] = useState([]);
  const url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovieReference(data.results))
      .catch((error) => console.error("Une erreur s'est produite", error));
  }, []);

  return (
    <>
      <div className={styles.suggestion}>
        <h2>You can also like :</h2>
        <div className={styles.referenceContainer}>
          {movieReference.slice(0, 6).map((movie) => (
            <div key={movie.id}>
              <div className={styles.referencePoster}>
                {movie.poster_path ? (
                  <img
                    src={`${url}${movie.poster_path}`}
                    alt={movie.orginal_title}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
