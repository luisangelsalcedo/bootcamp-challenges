import axios from "axios";

/**
 * * AXIOS INSTANCE
 */
const axiosHTTPclient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

/**
 * * REQUEST INTERCEPTOR
 */
axiosHTTPclient.interceptors.request.use(
  (config) => {
    if (config.url.indexOf("/api") === -1) return config;
    const { token } = JSON.parse(localStorage.getItem("auth")) || {
      token: "",
    };
    const newHeaders = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    config.headers = newHeaders;
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * * RESPONSE INTERCEPTOR
 */
axiosHTTPclient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.data);

    return Promise.reject(error);
  }
);

export default axiosHTTPclient;
