import { apiInstance } from "./axios";

export const login = async (credentials) => {
  try {
    const response = await apiInstance.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
