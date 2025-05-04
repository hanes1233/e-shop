import React, { useState } from "react";
import Logo from "../Logo";
import Authorization from "../../auth/Authorization";
import { Container } from "react-bootstrap";
import FloatingText from "../text/FloatingText";
import Footer from "../../navigation/api/Footer";
import Login from "../../auth/Login";

function NoData() {
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
                    <FloatingText text="No data found for this section:(" />
                    <FloatingText text="Try again later or switch to another category" />
                </div>
                <img
                    src='/wallpapers/crying.jpg'
                    className="img-fluid"
                    alt="Wallpaper image"
                />
                <Footer className='mt-5' />
            </Container>
        </>
    )
}

export default NoData;