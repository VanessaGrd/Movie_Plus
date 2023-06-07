import {Routes, Route} from "react-router-dom"
import './App.module.css'
import MoviesList from './pages/MoviesList';
import { styles } from "react";

function App() {
  
  return (
    <>
    <NavBar/>
    <main className={styles.mainContainer}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/moviedetails" element={<Movie/>}/>
      </Routes>
<MoviesList/>
</main>
</>
  )
}

export default App
