import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Logo from "./Logo";
import FloatingText from "./text/FloatingText";
import Authorization from "../authorization/Authorization";
import Login from "../authorization/Login";
import Footer from "../navigation/Footer";

function LoadingPage() {
    const [showLogin, setShowLogin] = useState(false);

    const onLogin = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowLogin(false);
    };

    return (
        <>
            <Logo />
            <Authorization onLogin={onLogin} />
            {showLogin && <Login toggleModal={showLogin} handleClose={handleClose} />}
            <Container>
                <div className="text-center">
                    <FloatingText text="Your data is loading, be patient" />
                    <Spinner className="my-5" animation="border" variant="info" />
                </div>
                <Footer className='mt-5' />
            </Container>
        </>
    )
}

export default LoadingPage;