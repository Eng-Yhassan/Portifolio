import { Route, Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import MoreProjects from "./Pages/MoreProjects"
import MoreSeminars from "./Pages/MoreSeminars"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/MoreProjects" element={<MoreProjects/>}/>
        <Route path="/MoreSeminars" element={<MoreSeminars/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App