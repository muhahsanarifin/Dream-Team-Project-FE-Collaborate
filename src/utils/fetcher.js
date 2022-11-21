import axios from "axios";

const baseUrl = process.env.REACT_APP_DT_BACKEND_HOST;
const baseUrl2 = `http://localhost:8090/`
console.log(process.env.REACT_APP_DT_BACKEND_HOST);

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

export const getProduct = (data) => {
  return axios({
    method: "GET",
    url: `${baseUrl2}raz/product`,
    data,
  });
};

export const getData = (url) => {
  const urls = baseUrl2 + url
  return axios.get(urls);
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