import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ApiServices, { ApiUrls } from "../apiService/ApiServices";

const Register = () => {
  const[msg , setMsg] = useState(" ")
  const[loading , setLoading] = useState(false)
  const[status , setStatus] = useState(false)

  const nameBox = useRef()
  const emailBox = useRef()
  const passwordBox = useRef()
  const numberBox = useRef()

  const register = async (e) => {
    e.preventDefault();
    const obj = {
      name : nameBox.current.value,
      phoneNumber : numberBox.current.value,
      email : emailBox.current.value,
      password : passwordBox.current.value,
    }
    console.log(obj);
    try {
      setLoading(true);
      const response = await ApiServices.PostApiCall(ApiUrls.DOCTOR_SAVE, obj);
      console.log("response:", response);
      if (response.data.status) {
        setStatus(true);
        setMsg(response.data.msg);

      } else {
        setStatus(false);
        setMsg(response.data.msg);
      }
    } catch (error) {
      setStatus(false);
      setMsg("Network Error");
    } 
    finally {
      setLoading(false);
    }
  }
 
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="logO">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828475.png"
              alt=""
            />
          </div>
          <form className="p-3 mt-3" onSubmit={register}>
            <div className="form-field d-flex align-items-center form-group">
              <span className="far fa-user"></span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Username"
                ref={nameBox}
                // className="form-control"x
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                ref={passwordBox}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa fa-envelope"></span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                ref={emailBox}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa fa-mobile"></span>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter Mobile Number"
                ref={numberBox}
              />
            </div>
            <button className="btn mt-3 bg-dark">{loading? "Saving...":"Save"}</button>
          </form>
          <div className="text-center my-5">
            <h1>
              <Link
                to="/login"
                className="text-success"
                style={{ fontSize: "20px" }}
              >
                Log in
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
