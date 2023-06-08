import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css"

export default function Home(){
    return(
        <>
        <Navbar/>
        <MoviesList/>
</>
    )
}