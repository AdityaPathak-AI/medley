import axios from "axios";

class ApiServices {
  PostApiCall(url, data) {
    return axios.post(url, data);
  }
  PostApiWithHeaders(url, data, token) {
    return axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}
const SERVER = "http://tutorials.codebetter.in:3000"

export const ApiUrls = {
  DOCTOR_SAVE: `${SERVER}/auth/doctor/save`,
  LOGIN: `${SERVER}/auth/login`,
  NEW_CLINIC: `${SERVER}/api/reception/save`,
  RECEPTION_LIST: `${SERVER}/api/reception/lists`,
};

export default new ApiServices()