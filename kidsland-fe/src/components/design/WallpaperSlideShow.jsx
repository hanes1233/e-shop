import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function WallpaperSlideShow() {
    return (
        <Carousel fade>
            <Carousel.Item interval={10000}>
                <img
                    src='/wallpapers/wallpaper1.jpg'
                    className="img-fluid"
                    alt="Wallpaper image"
                />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    src='/wallpapers/wallpaper2.jpg'
                    className="img-fluid"
                    alt="Wallpaper image"
                />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    src='/wallpapers/wallpaper3.jpg'
                    className="img-fluid"
                    alt="Wallpaper image"
                />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    src='/wallpapers/wallpaper4.jpeg'
                    className="img-fluid"
                    alt="Wallpaper image"
                />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    src='/wallpapers/wallpaper1.jpg'
                    className="img-fluid"
                    alt="Wallpaper image"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default WallpaperSlideShow;