import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import FloatingText from "./components/design/text/FloatingText";
import Navigation from "./components/navigation/Navigation";
import WallpaperSlideShow from "./components/design/WallpaperSlideShow";
import Footer from "./components/navigation/Footer";
import ApiHeader from "./components/navigation/api/ApiHeader";
import { useLocation } from "react-router-dom";

function Main(props) {
    const location = useLocation();

    const categories = props.categories;

    useEffect(() => {}, [location.key]);

    return (
        <>
            {!categories ? null
                :
                <div>
                    <ApiHeader />
                    <Container>
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