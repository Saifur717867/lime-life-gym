import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/auth/useAuth";
import useAdmin from "../hook/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, logOut, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    logOut()
    .then()
    .catch();
    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default AdminRoute;