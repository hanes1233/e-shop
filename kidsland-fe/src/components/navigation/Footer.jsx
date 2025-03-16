import React from "react";
import '../../css/Footer.css';
import { Col, Container, Row } from "react-bootstrap";
import { facebookImg, instagramImg, twitterImg, youtubeImg } from "../../constants/images";

function Footer() {

    const handleClick = (e) => {
        const elementId = e.currentTarget.id;
        switch (elementId) {
            case 'youtube' : {
                window.location.href = 'https://www.youtube.com';
                break;
            }
            case 'twitter' : {
                window.location.href = 'https://www.x.com';
                break;
            }
            case 'instagram' : {
                window.location.href = 'https://www.instagram.com';
                break;
            }
            case 'facebook' : {
                window.location.href = 'https://www.facebook.com';
                break;
            }
            default: return(<h4>Unknown operation</h4>);
        }
    };

    return (
        <>
            <Container className="footer">
                <Row className="footer-header">
                    <Col>
                        <span className="footer-items">Contact</span>
                    </Col>
                    <Col>
                        <span className="footer-items">Information</span>
                    </Col>
                    <Col>
                        <span className="footer-items">Partners</span>
                    </Col>
                    <Col className="mb-4">
                        <span className="footer-items">Follow us</span>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col><span className="footer-items">one</span></Col>
                    <Col><span className="footer-items">one</span></Col>
                    <Col><span className="footer-items">one</span></Col>
                    <Col>
                        <span id="facebook" className="me-4" onClick={handleClick}>
                            {facebookImg}
                        </span>
                        <span id="instagram" className="ms-2" onClick={handleClick}>
                            {instagramImg}
                        </span>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col><span className="footer-items">two</span></Col>
                    <Col><span className="footer-items">two</span></Col>
                    <Col><span className="footer-items">two</span></Col>
                    <Col>
                        <span id="twitter" className="me-4" onClick={handleClick}>
                            {twitterImg}
                        </span>
                        <span id="youtube" className="ms-2" onClick={handleClick}>
                            {youtubeImg}
                        </span>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="col-3"><span className="footer-items">three</span></Col>
                    <Col className="col-3"><span className="footer-items">three</span></Col>
                    <Col><span className="footer-items">three</span></Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;