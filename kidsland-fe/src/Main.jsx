import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import FloatingText from "./components/design/text/FloatingText";
import Navigation from "./components/navigation/Navigation";
import WallpaperSlideShow from "./components/design/WallpaperSlideShow";
import Authorization from "./components/authorization/Authorization";
import { ACCESSORIES, BABIES, DRESS, FURNITURE, SHOES, SPORT, TOYS } from "./constants/sections";
import Login from "./components/authorization/Login";
import Logo from "./components/design/Logo";
import SearchBar from "./components/design/SearchBar";
import Footer from "./components/navigation/Footer";
import { apiGet } from "./utils/api";
import LoadingPage from "./components/design/LoadingPage";

function Main() {

    const [showLogin, setShowLogin] = useState(false);
    const [categories, setCategories] = useState([]);

    const onLogin = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowLogin(false);
    };

    useEffect(() => {
        apiGet("/api/v1/categories").then((data) => setCategories(data));
    }, []);

    console.log(categories);

    return (
        <>
            {!categories ? <LoadingPage />
                :
                <div>
                    <Logo />
                    <Authorization onLogin={onLogin} />
                    {showLogin && <Login toggleModal={showLogin} handleClose={handleClose} />}
                    <Container>
                        <SearchBar />
                        <FloatingText text="Welcome to KidsLand! Everything for your kid in one place" />
                        <WallpaperSlideShow />
                        <Navigation
                            section={TOYS}
                        />
                        <br />
                        <Navigation
                            section={DRESS}
                        />
                        <br />
                        <Navigation
                            section={SHOES}
                        />
                        <br />
                        <Navigation
                            section={ACCESSORIES}
                        />
                        <br />
                        <Navigation
                            section={FURNITURE}
                        />
                        <br />
                        <Navigation
                            section={BABIES}
                        />
                        <br />
                        <Navigation
                            section={SPORT}
                        />
                        <br />
                        <Footer />
                    </Container>
                </div>
            }
        </>
    );
}

export default Main;