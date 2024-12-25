import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ element, ...rest }) => {
  const isAuthenticated = !!sessionStorage.getItem("account"); // Ví dụ: kiểm tra xác thực qua token
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
