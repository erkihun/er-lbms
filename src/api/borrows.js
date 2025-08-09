import { apiInstance } from "./axios";

export const getBorrows = (params = {}) =>
  apiInstance.get("/borrows", { params });
export const getActiveBorrows = () => apiInstance.get("/borrows/active");
export const getOverdueBorrows = () => apiInstance.get("/borrows/overdue");
export const createBorrow = (data) => apiInstance.post("/borrows", data);
export const returnBorrow = (id) => apiInstance.put(`/borrows/${id}/return`);
export const getBorrowsCount = () => apiInstance.get("/borrows/count");
