import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav() {
  const user = useSelector((state) => state.authInfo.value);
  
  return (
    <>
      <header>
        <div className="header-area ">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <Link to="/">
                      {/* <img src="assets/img/logo/logo.png" alt="" /> */}
                      <h1 style={{ fontSize: "40px", fontFamily: "" }}>
                        medley.
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          {user.isLogin ? (
                            <>
                              {user.type == "doctor" ? (
                                <>
                                  <li>
                                    <Link to="/">Home</Link>
                                  </li>
                                  <li>
                                    <Link to="/">New Clinic</Link>
                                  </li>
                                  <li>
                                    <Link to="/">All Clinics</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Appointments</Link>
                                  </li>
                                </>
                              ) : (
                                ""
                              )}
                              {user.type == "reception" ? <></> : ""}
                            </>
                          ) : (
                            <>
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="about">About</Link>
                              </li>
                              <li>
                                <Link to="services">Services</Link>
                              </li>
                              <li>
                                <Link to="contact">Contact</Link>
                              </li>
                              <li>
                                <Link to="login">Login</Link>
                              </li>
                              <li>
                                <Link to="register">Register</Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </nav>
                    </div>
                    {user.isLogin ? (
                      <>
                        <div className="header-right-btn f-right d-none d-lg-block ml-15">
                          <Link to="/" className="btn header-btn">
                            Logout
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="header-right-btn f-right d-none d-lg-block ml-15">
                          <Link to="/" className="btn header-btn">
                            Make an Appointment
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
