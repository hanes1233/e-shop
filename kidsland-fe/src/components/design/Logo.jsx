import React from "react";
import { useNavigate } from 'react-router-dom';

function Logo() {
    const navigate = useNavigate();

    function backHome() {
        navigate('/');
    }

    return (
        <>
            <img src="/icons/logo.png" alt='logo' onClick={backHome} className="ms-3 mb-4 mt-2" />
        </>
    );
}

export default Logo;