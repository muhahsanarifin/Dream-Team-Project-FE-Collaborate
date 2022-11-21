import axios from "axios";

const baseUrl = process.env.REACT_APP_DT_BACKEND_HOST;

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const login = (data) => {
  return axiosRequest("POST", "/auth/login", data);
};

// export const logout = (token) => {
//   return axios({
//     method: "DELETE",
//     url: `${baseUrl}/auth/logout`,
//     headers: { "x-access-token": token },
//   });
// };

// export const reset = (data) => {
//   return axiosRequest("POST", "/auth/reset", data);
// };

// export const register = (body) => {
//   return axiosRequest("POST", "/users/register", body);
// };