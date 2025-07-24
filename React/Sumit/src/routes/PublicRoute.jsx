import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component }) => {
  const auth = useSelector((state) => state.jwtAuthentication);

  if (auth?.jwt && auth?.username) {
    return <Navigate to="/self-enum-hlo" replace />;
  }

  return <Component />;
};

export default PublicRoute;
