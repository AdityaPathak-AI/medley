import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ApiServices, { ApiUrls } from "../../apiService/ApiServices";

export default function NewClinic() {
  const user = useSelector((state) => state.authInfo.value);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const nameBox = useRef();
  const emailBox = useRef();
  const phoneBox = useRef();
  const passBox = useRef();
  const addressBox = useRef();

  const clinicSave = async (event) => {
    event.preventDefault();
    const obj = {
      name: nameBox.current.value,
      phoneNumber: phoneBox.current.value,
      email: emailBox.current.value,
      password: passBox.current.value,
      raddress: addressBox.current.value,
    };
    console.log(obj);
    try {
      setLoading(true);
      const response = await ApiServices.PostApiWithHeaders(ApiUrls.NEW_CLINIC,obj,user.token);
      console.log("response", response);
      if (response.data.status) {
        setStatus(true);
        setMsg(response.data.msg);
      } else {
        setStatus(false);
        setMsg(response.data.msg);
      }
    } catch (error) {
      setStatus(false);
      setMsg("Network Issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4"></div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">New Clinic Registeration ..!</h2>
            </div>
            <div className="col-lg-8">
              <form onSubmit={clinicSave} className="form-contact contact_form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control valid"
                        ref={nameBox}
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control valid"
                        ref={emailBox}
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        ref={phoneBox}
                        name="phone"
                        id="phone"
                        type="number"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter phone number'"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        ref={passBox}
                        name="password"
                        id="password"
                        type="password"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your password'"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Clinic Address</label>
                      <input
                        className="form-control valid"
                        ref={addressBox}
                        name="raddress"
                        id="raddress"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter clinic address'"
                        placeholder="Enter clinic address"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    {loading ? "Saving..." : "Saved"}
                  </button>
                </div>
                <h3 className={status ? " alert alert-success" : "text-danger"}>
                  {msg}
                </h3>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
