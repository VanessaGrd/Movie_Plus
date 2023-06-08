import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"


export default function Navbar(){
    
    return(
        <header>
        <nav className={styles.navBar}>
          <ul>
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