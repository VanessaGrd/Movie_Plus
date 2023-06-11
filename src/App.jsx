import {Routes, Route} from "react-router-dom"
import './App.module.css'
import Details from "./pages/Details";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Details/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

</>
  )
}

export default App
