import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/auth/useAuth";
import useTrainerAuthor from "../hook/useTrainerAuthor";


const TrainerRoute = ({ children }) => {
    const { user, logOut, loading } = useAuth();
    const [isTrainer, isTrainerLoading] = useTrainerAuthor();
    const location = useLocation();

    if (loading || isTrainerLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isTrainer) {
        return children;
    }
    logOut()
    .then()
    .catch();
    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default TrainerRoute;