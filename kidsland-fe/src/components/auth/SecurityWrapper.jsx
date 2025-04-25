
import { Navigate } from "react-router-dom";

function SecurityWrapper({ children }) {
    const raw = localStorage.getItem("jwtToken");
    const token = raw ? JSON.parse(raw) : null;

    const isAdmin = token && token.expiry > Date.now() && token.admin === true;

    return isAdmin ? children : <Navigate to="/login" replace />;
};

export default SecurityWrapper;
