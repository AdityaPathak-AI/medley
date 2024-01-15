import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiServices, { ApiUrls } from "../../apiService/ApiServices";
import { listClinicReducer } from "../../redux/ClinicSlice";


export default function AllClinics() {
  const user = useSelector((state) => state.authInfo.value);
  const clinics = useSelector((state) => state.clinicInfo.value);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const fetchUserList = async () => {
    try {
      setLoading(true);
      const response = await ApiServices.GetApiCall(
        ApiUrls.CLINIC_LIST,
        user.token
      );
      console.log("User List response", response);
      if (response.data.status) {
        setMsg(response.data.data.msg);
        dispatch(listClinicReducer(response.data.data));
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
   
  const del = async (id) => {
    const confirm = window.confirm("Do you want to Delete Record?")
    if (confirm){
      try {
        const URL = ApiUrls.CLINIC_DELETE + id
        const response = await ApiServices.ClinicDeleteApi(URL , null ,user.token)
        console.log(response)
        if(response.data.status){
          setMsg(response.data.msg)
          const nlist = clinics.filter(obj=>obj.id !== response.data.id)
          dispatch((nlist))
        }
        else{
          setMsg(response.data.msg)
        }
       } catch (error) {
        setMsg('network error')
      }
    }else{
      setMsg('Action Cancelled by User');
    }
  }

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Clinic Details</h2>
            </div>
            <div className="col lg-12">
              {loading ? (
                <div className="spinner-border" role="status"></div>
              ) : (
                <table className="table table-responsive table-hover table-stripped">
                  <thead>
                    <th>S.No</th>
                    <th>Address</th>
                    <th>Receptionist</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {clinics?.map((obj, index) => (
                      <tr style={{ fontSize: "20px" }}>
                        <td>{index + 1}</td>
                        <td>{obj.raddress}</td>
                        <td>{obj.name}</td>
                        <td>{obj.phoneNumber}</td>
                        <td>{obj.email}</td>
                        <td>
                          <button className="btn btn-sucess">Update</button>
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-danger"
                            onClick={()=>del(obj.id)}
                            style={{ backgroundColor: "red" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>   
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
