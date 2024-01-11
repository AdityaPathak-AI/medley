import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ApiServices, { ApiUrls } from "../../apiService/ApiServices";


export default function AllClinics() {
    const user = useSelector((state) => state.authInfo.value);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUserList = async () => {
      try {
        setLoading(true);
        const response = await ApiServices.GetApiWithHeaders(
          ApiUrls.RECEPTION_LIST,
          user.token
        );
        console.log("User List response", response);
        if (response.data.status) {
          setUsers(response.data.data);
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
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <button onClick={fetchUserList}>Get Data</button>
      </div>
    </>
  );
}
