import React from "react";

function ImageWrapper(props) {
    const {image, description, handleClick} =  props;

    return (
        <>
            <div className="me-5 ms-5" onClick={handleClick}>
                <div className="image-card">{image}</div>
                <p className="ms-1 mt-1">{description}</p>
            </div>
        </>
    )
}

export default ImageWrapper;