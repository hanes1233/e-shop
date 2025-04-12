import React, { useState } from "react";
import Login from '../authorization/Login';
import Authorization from '../authorization/Authorization';

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