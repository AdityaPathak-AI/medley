import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import NewClinic from "./components/doctor/NewClinic";
import AllClinics from "./components/doctor/AllClinics";
import Appointments from "./components/doctor/Appointments";
import Update from "./components/doctor/UpdateClinic";
function App() {
  const user = useSelector((state) => state.authInfo.value);
  return (
    <>
      <Nav />

      <Routes>
        {user.isLogin ? (
          <>
            {user.type == "doctor" ? (
              <>
                <Route path="/" element={<Home />}></Route>
                <Route path="/newClinic" element={<NewClinic />}></Route>
                <Route path="/allClinics" element={<AllClinics />}></Route>
                <Route
                  path="/allAppointments"
                  element={<Appointments />}
                ></Route>
                <Route path="/update" element={<Update />}></Route>
              </>
            ) : (
              <> </>
            )}
          </>
        ) : (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </>
        )}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
