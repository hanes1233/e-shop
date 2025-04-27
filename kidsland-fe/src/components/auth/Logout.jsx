import React from "react";
import { Button } from "react-bootstrap";
import '../../css/Authorization.css';
import { useNavigate } from "react-router-dom";
import { clearStorages } from "../../utils/jwtService";

function Logout() {
    const navigate = useNavigate();

    return (
        <>
            <div className="authorization-container">
                <Button
                    onClick={() => {
                        clearStorages();
                        navigate("/");
                    }}
                    style={{ backgroundColor: 'var(--bs-danger-bg-subtle)', color: 'black' }}>
                    Log out
                </Button>
            </div>
        </>
    )
}

export default Logout;