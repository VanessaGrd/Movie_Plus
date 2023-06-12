import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navBar}>
        <img src={logo} alt="logo" />
        <ul className={styles.links}>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
