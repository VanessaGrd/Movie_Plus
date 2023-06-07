import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";

export default function Home(){
    return(
        <>
        <Navbar/>
        <MoviesList/>
</>
    )
}