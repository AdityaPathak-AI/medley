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
import NewAppointment from "./components/reception/NewAppointment";
import AllAppointments from "./components/reception/AllAppointments";
import UpdateAppointment from "./components/reception/UpdateAppointment";
function App() {
  const user = useSelector((state) => state.authInfo.value);
  return (
    <>
      <Nav />

      <Routes>
        {/* DOCTOR LOGIN */}
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
              <></>
            )}

          {/* RECEPTION LOGIN */}

            {user.type == "reception" ? (
              <>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/newAppointment" element={<NewAppointment />}></Route>
                <Route path="/allAppointments"element={<AllAppointments />}></Route>
                <Route path="/updateAppointment"element={<UpdateAppointment />}></Route>
              </>
            ) : (
              <></>
            )}

            {/* USER */}
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

