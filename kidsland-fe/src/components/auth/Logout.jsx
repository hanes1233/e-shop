import React from "react";
import { Button } from "react-bootstrap";
import '../../css/Authorization.css';
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleClick = () => {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <>
            <div className="authorization-container">
                <Button onClick={handleClick}>Log out</Button>
            </div>
        </>
    )
}

export default Logout;