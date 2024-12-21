import axios from "axios";

const handleLogin = (email, password) => {
  return axios.post("/api/login", { email, password });
};
const getAllUsers = (userId) => {
  return axios.get(`/api/get-all-users?id=${userId}`);
};

const registerNewUser = (email, name, age, gender, password, roleId) => {
  return axios.post("http://localhost:8080/api/v1/register", {
    email,
    name,
    age,
    gender,
    password,
    roleId,
  });
};

export { getAllUsers, handleLogin, registerNewUser };
