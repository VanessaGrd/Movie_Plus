import Navbar from "../components/Navbar";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <h2>  Welcome to Movie+ !</h2> <br></br>
      <p>
         We have created a user-friendly platform where you
         can explore a huge collection of captivating movie posters.
         Whether you are an avid movie buff or simply looking for a
         enjoyable movie night, Movie+ is there for you.
         <br></br> <br></br>
         When you browse
         our site, you will discover several movie posters from
         of the most popular and varied genres.
         <br></br> <br></br>
         We also provide you with detailed information about
         every movie including ratings, release date and details
         essential.
         <br></br>  <br></br>At Movie+, we make a point
         of honor to offer you the best possible experience. We put to
         regularly updates our film library to keep you informed
         of the latest releases and timeless classics.<br></br> <br></br>
         Good viewing !
      </p>
      </div>
    </>
  );
}
