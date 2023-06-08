import {Routes, Route} from "react-router-dom"
import './App.module.css'
import Details from "./pages/Details";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Details/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

</>
  )
}

export default App
