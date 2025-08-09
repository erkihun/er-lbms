import api from "./axios";

export const getMembers = async (params = {}) => {
  const response = await api.get("/members", { params });
  return response.data;
};

export const getMember = async (id) => {
  const response = await api.get(`/members/${id}`);
  return response.data;
};

export const createMember = async (memberData) => {
  const response = await api.post("/members", memberData);
  return response.data;
};

export const updateMember = async (id, memberData) => {
  const response = await api.patch(`/members/${id}`, memberData);
  return response.data;
};

export const deleteMember = async (id) => {
  const response = await api.delete(`/members/${id}`);
  return response.data;
};

export const getMemberStats = async () => {
  const response = await api.get("/members/stats");
  return response.data;
};
