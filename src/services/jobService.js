import axios from "axios";

const API_URL = "http://localhost:8081/api/jobs";

export const getAllJobs = async () => {
  return await axios.get(API_URL);
};

export const getJobById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createJob = async (jobData) => {
  return await axios.post(API_URL, jobData);
};

export const updateJob = async (id, jobData) => {
  return await axios.put(`${API_URL}/${id}`, jobData);
};

export const deleteJob = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const searchJobs = async (keyword) => {

  if(!keyword || keyword.trim()===""){

    return await axios.get(API_URL);

  }

  return await axios.get(

    `${API_URL}/search?keyword=${encodeURIComponent(keyword)}`

  );

};