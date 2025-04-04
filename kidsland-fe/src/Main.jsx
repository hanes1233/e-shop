import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import FloatingText from "./components/design/text/FloatingText";
import Navigation from "./components/navigation/Navigation";
import WallpaperSlideShow from "./components/design/WallpaperSlideShow";
import Authorization from "./components/authorization/Authorization";
import Login from "./components/authorization/Login";
import Logo from "./components/design/Logo";
import SearchBar from "./components/design/SearchBar";
import Footer from "./components/navigation/Footer";

function Main(props) {

    const [showLogin, setShowLogin] = useState(false);
    const categories = props.categories;

    const onLogin = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowLogin(false);
    };

    return (
        <>
            {!categories ? null
                :
                <div>
                    <Logo />
                    <Authorization onLogin={onLogin} />
                    {showLogin && <Login toggleModal={showLogin} handleClose={handleClose} />}
                    <Container>
                        <SearchBar />
                        <FloatingText text="Welcome to KidsLand! Everything for your kid in one place" />
                        <WallpaperSlideShow />
                        {categories.slice().reverse().map((category, index) => {
                            return (
                                <div key={index}>
                                    <Navigation category={category} />
                                    <br />
                                </div>
                            )
                        })}
                        <Footer />
                    </Container>
                </div>
            }
        </>
    );
}

export default Main;