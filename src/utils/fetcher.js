import axios from "axios";

// const baseUrl = process.env.REACT_APP_DT_BACKEND_HOST;
const baseUrl = 'https://dream-team-project-be.vercel.app/';


// const baseUrl2 = `http://localhost:8090/`
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

export const getProduct = ( params, data) => {
  return axios({
    method: "GET",
    url: `${baseUrl}raz/product`,
    data,
    params,
  });
};

export const getData = (url) => {
  const urls = baseUrl + url
  return axios.get(urls);
};

export const getCategories = (data) => {
  return axiosRequest("GET", "/categories", data);
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