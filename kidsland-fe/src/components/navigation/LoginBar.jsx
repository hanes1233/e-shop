import React, { useState } from "react";
import Login from '../auth/Login';
import Authorization from '../auth/Authorization';

function LoginBar() {
    const [showLogin, setShowLogin] = useState(false);

    const onLogin = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowLogin(false);
    };

    return (
        <>
            <Authorization onLogin={onLogin} />
            {showLogin && <Login toggleModal={showLogin} handleClose={handleClose} />}
        </>
    )
}

export default LoginBar;