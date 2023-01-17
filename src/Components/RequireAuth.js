/* eslint-disable no-unused-vars */
import { useAuth } from "./Auth";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  // console.log(children);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/warning" />;
  }
  return children;
}

export default RequireAuth;
