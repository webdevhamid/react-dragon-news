import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
