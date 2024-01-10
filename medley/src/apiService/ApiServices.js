import axios from "axios";

class ApiServices{
    PostApiCall(url , data){
        return axios.post(url,data)
    }
}
const SERVER = "http://tutorials.codebetter.in:3000"

export const ApiUrls = {
    DOCTOR_SAVE : `${SERVER}/auth/doctor/save`,
    LOGIN       : `${SERVER}/auth/login`,
}

export default new ApiServices()