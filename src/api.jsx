import axiosInstance from "./axiosInstance";

const API_URL = "/projects";

export const fetchProjects = async () => {
  const response = await axiosInstance.get(API_URL);
  console.log(response.data);
  return response.data;
};

export const createProject = async (project) => {
  const response = await axiosInstance.post(API_URL, project);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await axiosInstance.put(`${API_URL}/${id}`, project);
  return response.data;
};

export const deleteProject = async (id) => {
  await axiosInstance.delete(`${API_URL}/${id}`);
};
