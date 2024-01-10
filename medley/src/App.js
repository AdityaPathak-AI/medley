import { Routes , Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Login from "./components/Login"
import Register from "./components/Register"
const App = () =>
{
  return(
    <>
      {/* <div> */}
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element = {<Services/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/login" element = {<Login/>}></Route>
          <Route path="/register" element = {<Register/>}></Route>
        </Routes>
        <Footer/>
      {/* </div> */}
    </>
  )
}
export default App