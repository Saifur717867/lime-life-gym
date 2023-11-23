import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const privateRouter = ({children}) => {
    
    const location = useLocation();
    // console.log(location)

    const {user, loading} = useContext(AuthContext)



    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
  
};

export default privateRouter;