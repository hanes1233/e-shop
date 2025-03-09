import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../css/FloatingText.css';

function FloatingText(props) {

    const text = props.text;
    const words = text.split(" ");

    const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <>
            <Row>
                <Col>
                    <h1 className="floating-text my-4">
                        {words.map((word, index) => (
                            <span key={index} className="word">
                                {word.split("").map((letter, letterIndex) => (
                                    <span
                                        key={letterIndex}
                                        className="letter"
                                        style={{
                                            animationDelay: `${Math.random() * 2}s`,
                                            animationDuration: `${Math.random() * 4 + 3}s`,
                                            color: randomColor(),
                                        }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                                {index < words.length - 1 && (
                                    <>
                                        <span className="space"> </span>
                                    </>
                                )}
                            </span>
                        ))}
                    </h1>
                </Col>
            </Row>
        </>
    )
}

export default FloatingText;