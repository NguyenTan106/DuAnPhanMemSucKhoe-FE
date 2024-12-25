import { Routes, Route } from "react-router-dom";
import Register from "../components/Register/Register";
import UserManage from "../components/ManageUsers/UserManage";
import Login from "../components/Auth/Login";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = (props) => {
  return (
    <Routes>
      {/* <Route path="/home" element={<UserManage />} />
      <Route path="/about" element={<div>about</div>} /> */}
      <Route
        path="/home"
        element={<PrivateRoutes element={<UserManage />} />}
      />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
