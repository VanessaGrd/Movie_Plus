import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"


export default function Navbar(){
    
    return(
        <header>
        <nav className={styles.navBar}>
        <h1>Movie+</h1>
          <ul className={styles.links}>
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact </NavLink>
            </li>
            </ul>
            </nav>
            </header>
    )

    
}