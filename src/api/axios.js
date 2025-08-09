import axios from "axios";

// Create a single instance and export it directly
export default axios.create({
  baseURL: "https://back-end-for-assessment.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors to the exported instance
const apiInstance = axios.create({
  baseURL: "https://back-end-for-assessment.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { apiInstance };
