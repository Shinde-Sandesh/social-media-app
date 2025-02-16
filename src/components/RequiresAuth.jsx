import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function RequiresAuth({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}
