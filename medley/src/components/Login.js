import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices, { ApiUrls } from "../apiService/ApiServices";
import { authReducer } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const[msg , setMsg] = useState(" ")
  const[loading , setLoading] = useState(false)
  const[status , setStatus] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const emailBox = useRef();
  const passwordBox = useRef();
 
  const login = async (e) => {
    e.preventDefault();
    const obj = {
      email : emailBox.current.value,
      password : passwordBox.current.value,
    }
    console.log(obj);
    try {
      setLoading(true);
      const response = await ApiServices.PostApiCall(ApiUrls.LOGIN, obj);
      console.log("response:", response);
      
      if (response.data.status) 
      {
        setStatus(true);
        setMsg(response.data.msg);
        const d = dispatch(
          authReducer({
            token: response.data.data.token,
            name: response.data.data.user.name,
            type: response.data.data.userType,
            isLogin: true
          })
        );
        console.log(d);
        navigate('/')
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
      <div className="container">
        <div className="wrapper">
          <div className="logO">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828475.png"
              alt=""
            />
          </div>
          <form className="p-3 mt-3" onSubmit={login}>
            <div className="form-field d-flex align-items-center form-group">
              <span className="far fa-user"></span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailBox}
                // className="form-control"x
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                ref={passwordBox}
              />
            </div>
            <button className="btn mt-3 bg-dark">Login</button>
          </form>
          <div className="text-center my-5">
            <h1 >
              <Link to="/register" className="text-success" style={{fontSize:'20px'}}>Sign up</Link>
            </h1>
          </div>
        </div>
      </div>
    );
}
export default Login;