import axios from "axios";

const headers = {
  "Content-type": "application/json",
};

const instance = axios.create({
  baseURL: "https://api.tvmaze.com/",
  headers: headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
