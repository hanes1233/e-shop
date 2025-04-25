import React from "react";
import Container from 'react-bootstrap/Container';
import FloatingText from "./components/design/text/FloatingText";
import Navigation from "./components/navigation/Navigation";
import WallpaperSlideShow from "./components/design/WallpaperSlideShow";
import Footer from "./components/navigation/Footer";
import GuestHeader from "./components/navigation/api/GuestHeader";

function Main(props) {

    const categories = props.categories;

    return (
        <>
            {!categories ? null
                :
                <div>
                    <GuestHeader />
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