import { apiInstance } from "./axios";

export const getBooks = (params = {}) => apiInstance.get("/books", { params });
export const getBook = (id) => apiInstance.get(`/books/${id}`);
export const createBook = (data) => apiInstance.post("/books", data);
export const updateBook = (id, data) => apiInstance.put(`/books/${id}`, data);
export const deleteBook = (id) => apiInstance.delete(`/books/${id}`);
export const getBooksCount = () => apiInstance.get("/books/count");
