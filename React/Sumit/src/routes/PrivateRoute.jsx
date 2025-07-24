import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component }) => {
  const auth = useSelector((state) => state.jwtAuthentication);
  const location = useLocation();

  
  if (!auth?.jwt || !auth?.username) {
    
  

    return <Navigate to="/" state={{ from: location }} replace />;
  }

  
  return <Component />;
};

export default PrivateRoute;
