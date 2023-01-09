import axios from "axios";

// const baseUrl = "http://localhost:8090/";
const baseUrl = "https://dream-team-project-be.vercel.app/";

// const baseUrl2 = http://localhost:8090/
// console.log(process.env.REACT_APP_DT_BACKEND_HOST);

const axiosRequest = (method, url, data, params) => {
  console.log(data);
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const login = (data) => {
  return axiosRequest("POST", "raz/auth/login", data);
};

export const getProduct = (params, data) => {
  return axios({
    method: "GET",
    url: `${baseUrl}raz/product`,
    data,
    params,
  });
};

export const getData = (url) => {
  const urls = baseUrl + url;
  return axios.get(urls);
};

export const createTransaction = (body, token) => {
  const urls = baseUrl + "raz/transaction/create";
  return axios.post(urls, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getCategories = (data) => {
  return axiosRequest("GET", "raz/product/category/", data);
};

export const getRelatedProduct = (url) => {
  const urls = baseUrl + url;
  return axios.get(urls);
};

export const getSellerProduct = (token, params) => {
  return axios({
    method: "GET",
    url: `${baseUrl}raz/product/seller`,
    headers: { "x-access-token": token },
    params,
  });
};

export const deleteSellerProduct = (token, params) => {
  return axios({
    method: "UPDATE",
    url: `${baseUrl}raz/product/seller`,
    headers: { "x-access-token": token },
    params,
  });
};

export const logout = (token) => {
  return axios({
    method: "DELETE",
    url: `${baseUrl}raz/auth/logout`,
    headers: { "x-access-token": token },
  });
};

// export const reset = (data) => {
//   return axiosRequest("POST", "/auth/reset", data);
// };

// export const register = (body) => {
//   return axiosRequest("POST", "/users/register", body);
// };
