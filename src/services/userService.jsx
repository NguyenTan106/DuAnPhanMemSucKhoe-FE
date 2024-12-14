import axios from "axios";
const getAllUsers = (userId) => {
  return axios.get(`/api/get-all-users?id=${userId}`);
};

export { getAllUsers };
