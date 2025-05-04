import React, { useState } from "react";
import '../../../css/navigation/Footer.css';
import { Col, Container, Row } from "react-bootstrap";
import { facebookImg, instagramImg, kidslandLogo, locationImg, mailImg, twitterImg, youtubeImg } from "../../../constants/images";
import { redirectToSocialMediaPage } from "../../../utils/redirect/socialMedia";
import Feedback from "../pop-up/Feedback";

function Footer() {
    const [showFeedback, setShowFeedback] = useState(false);

    const handleRedirect = (e) => {
        const elementId = e.currentTarget.id;
        redirectToSocialMediaPage(elementId);
    };

    return (
        <>
            <Feedback showModal={showFeedback} handleClose={() => setShowFeedback(false)} />
            <Container className="footer">
                <Row className="footer-header">
                    <Col>
                        <h4 className="footer-headers">Contact</h4>
                    </Col>
                    <Col>
                        <h4 className="footer-headers">Information</h4>
                    </Col>
                    <Col>
                        <h4 className="footer-headers">Partners</h4>
                    </Col>
                    <Col className="mb-4">
                        <h4 className="footer-headers">Follow us</h4>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <span className="footer-items"><i>Write us</i> {mailImg}</span>
                    </Col>
                    <Col>
                        <span className="footer-items"><i>About</i> <b className="ms-1 kidsland">Kidsland ©</b>{kidslandLogo}</span>
                    </Col>
                    <Col>
                        <span className="footer-items"><i>Cooperation</i></span>
                    </Col>
                    <Col>
                        <span id="facebook" className="me-4" onClick={handleRedirect}>
                            {facebookImg}
                        </span>
                        <span id="instagram" className="ms-2" onClick={handleRedirect}>
                            {instagramImg}
                        </span>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <span className="footer-items"><i>Find us</i> {locationImg}</span>
                    </Col>
                    <Col>
                        <span className="footer-items"><i>Compliance</i></span>
                    </Col>
                    <Col>
                        <span className="footer-items"><i>Brands ®</i></span>
                    </Col>
                    <Col>
                        <span id="twitter" className="me-4" onClick={handleRedirect}>
                            {twitterImg}
                        </span>
                        <span id="youtube" className="ms-2" onClick={handleRedirect}>
                            {youtubeImg}
                        </span>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="col-3">
                        <span className="footer-items" onClick={() => setShowFeedback(true)}><i>Feedback</i></span>
                    </Col>
                    <Col className="col-3">
                        <span className="footer-items"><i>Career</i></span>
                    </Col>
                    <Col>
                        <span className="footer-items"><i>For media</i></span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;