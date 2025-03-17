import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import FloatingText from "./components/design/text/FloatingText";
import Navigation from "./components/navigation/Navigation";
import WallpaperSlideShow from "./components/design/WallpaperSlideShow";
import Authorization from "./components/authorization/Authorization";
import { ACCESSORIES, BABIES, FURNITURE, TOYS } from "./constants/categories";
import Login from "./components/authorization/Login";
import Logo from "./components/design/Logo";
import SearchBar from "./components/design/SearchBar";
import Footer from "./components/navigation/Footer";

function Main() {

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
                <SearchBar />
                <FloatingText text="Welcome to KidsLand! Everything for your kid in one place" />
                <WallpaperSlideShow />
                <Navigation
                    section={{ name: "Toys", path: "/toys" }}
                    categories={TOYS}
                />
                <br />
                <Navigation
                    section={{ name: 'Dress', path: '/dress' }}
                    specialOffer={true}
                    enableGenderSections={true}
                />
                <br />
                <Navigation
                    section={{ name : 'Shoes', path : '/shoes' }}
                    specialOffer={true}
                    enableGenderSections={true}
                />
                <br />
                <Navigation
                    section={{ name : 'Accessories', path : '/accessories' }}
                    categories={ACCESSORIES}
                />
                <br />
                <Navigation
                    section={{ name : 'Furniture', path : '/furniture' }}
                    categories={FURNITURE}
                    specialOffer={true}
                />
                <br />
                <Navigation
                    section={{ name : 'For babies', path : '/baby' }}
                    categories={BABIES}
                />
                <br />
                <Navigation
                    section={{ name : 'Sport', path : '/sport' }}
                    enableGenderSections={true}
                    specialOffer={true}
                />
                <br />
                <Footer />
            </Container>
        </>
    );
}

export default Main;