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
  GetApiCall(url, token) {
    return axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  ClinicDeleteApi(url, data, token) {
    return axios.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  ClinicUpdateApi(url, data, token) {
    return axios.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

const SERVER = "http://tutorials.codebetter.in:3000";

export const ApiUrls = {
  DOCTOR_SAVE: `${SERVER}/auth/doctor/save`,
  LOGIN: `${SERVER}/auth/login`,
  NEW_CLINIC: `${SERVER}/api/reception/save`,
  CLINIC_LIST: `${SERVER}/api/reception/lists`,
  CLINIC_DELETE: `${SERVER}/api/reception/delete/`,
  CLINIC_UPDATE : `${SERVER}/api/reception/updateReception/`
};  

export default new ApiServices();
