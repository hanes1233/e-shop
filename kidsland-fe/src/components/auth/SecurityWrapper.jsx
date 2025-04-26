import { Navigate } from "react-router-dom";
import cacheManager from "../../utils/CacheManager";
import { useEffect, useState } from "react";
import { findToken } from "../../utils/jwtService";

function SecurityWrapper({ children }) {
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        let token = findToken();

        if (!token) {
            return <Navigate to="/login" replace />;
        }

        if (token.jwt && token.expiry > Date.now()) {
            const userInfo = cacheManager.getCachedUserInfo(token.jwt);

            if (userInfo && userInfo.admin) {
                setIsAdmin(true);
                return;
            }
        }

        setIsAdmin(false);
    }, []);

    if (isAdmin === null) return null;

    return isAdmin ? children : <Navigate to="/login" replace />;
}

export default SecurityWrapper;
