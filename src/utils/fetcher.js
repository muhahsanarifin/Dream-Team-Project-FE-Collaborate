import axios from "axios";

const baseUrl = "http://localhost:8090/";
// const baseUrl = "https://dream-team-project-be.vercel.app/";

// const baseUrl2 = http://localhost:8090/
// console.log(process.env.REACT_APP_DT_BACKEND_HOST);
const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

const configs = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
};

const axiosRequest = (method, url, data, params) => {
  console.log(data);
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

// export const login = (data) => {
//   return axiosRequest("POST", "/auth/login", data);
// };

export const getOrderCustomer = (params) => {
  const url = `${baseUrl}raz/transaction/checkout-customer`;
  return axios.get(url, params);
};

export const getOrderSeller = (params) => {
  console.log(params);
  const url = `${baseUrl}raz/transaction/checkout-seller`;
  return axios.get(url, params);
};

export const login = (body) => {
  const URL = `${baseUrl}raz/auth/login`;
  return axios.post(URL, body);
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

export const createProduct = (body, token) => {
  const urls = `${baseUrl}raz/product`;
  return axios.post(urls, body, config(token));
};

export const getProfile = (token) => {
  const urls = `${baseUrl}raz/users/profile`;
  return axios.get(urls, config(token));
};

export const editProfile = (body, token) => {
  const urls = `${baseUrl}raz/users/profile/edit`;
  return axios.patch(urls, body, config(token));
};

export const logout = (token) => {
  const URL = `${baseUrl}raz/auth/logout`;
  return axios.delete(URL, config(token));
};

// export const getProfile = () => {
//   const login = JSON.parse(localStorage.getItem("login"));
//   const token = login.token;
//   console.log(token);
//   const URL = `${baseUrl}raz/users/profile`;
//   console.log(URL);
//   return axios.get(URL, {
//     headers: {
//       "x-access-token": token,
//     },
//   });
// };

// export const logout = (token) => {
//   return axios({
//     method: "DELETE",
//     url: ${baseUrl}/auth/logout,
//     headers: { "x-access-token": token },
//   });
// };

// export const reset = (data) => {
//   return axiosRequest("POST", "/auth/reset", data);
// };

// export const register = (body) => {
//   return axiosRequest("POST", "/users/register", body);
// };

export const register = (body) => {
  const URL = `${baseUrl}raz/auth/register`;
  return axios.post(URL, body);
};
