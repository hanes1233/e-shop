import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import FloatingText from "./components/design/text/FloatingText";
import Navigation from "./components/navigation/Navigation";
import WallpaperSlideShow from "./components/design/WallpaperSlideShow";
import LoginBar from './components/navigation/LoginBar';
import Logo from "./components/design/Logo";
import SearchBar from "./components/design/SearchBar";
import Footer from "./components/navigation/Footer";

function Main(props) {

    const categories = props.categories;

    return (
        <>
            {!categories ? null
                :
                <div>
                    <Logo />
                    <LoginBar />
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