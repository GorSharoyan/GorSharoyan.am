// library imports
import { Navigate, Outlet } from "react-router-dom";

// context import
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/admin"  />;
};

export default ProtectedRoute;