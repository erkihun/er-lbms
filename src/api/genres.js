import { apiInstance } from "./axios";

export const getGenres = () => apiInstance.get("/genres");
export const getPopularGenres = () => apiInstance.get("/genres/popular");
export const createGenre = (data) => apiInstance.post("/genres", data);
export const updateGenre = (id, data) => apiInstance.put(`/genres/${id}`, data);
export const deleteGenre = (id) => apiInstance.delete(`/genres/${id}`);
