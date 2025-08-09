import { apiInstance } from "./axios";

export const getMembers = () => apiInstance.get("/members");
export const getMember = (id) => apiInstance.get(`/members/${id}`);
export const createMember = (data) => apiInstance.post("/members", data);
export const updateMember = (id, data) =>
  apiInstance.put(`/members/${id}`, data);
export const deleteMember = (id) => apiInstance.delete(`/members/${id}`);
export const getMembersCount = () => apiInstance.get("/members/count");
