import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000",
});

const camelToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

// @ts-ignore
http.interceptors.response.use((response) => {
  return { data: response.data, status: response.status };
});

http.interceptors.request.use((config) => {
  if (config.method?.toLowerCase() === "post") {
    const updatedBody = {};
    Object.keys(config.data).forEach((key) => {
      const snakeCaseKey = camelToSnakeCase(key);
      updatedBody[snakeCaseKey] = config.data[key];
    });
    config.data = updatedBody;
  }
  return config;
});

export default http;
