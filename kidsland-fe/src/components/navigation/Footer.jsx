import React from "react";
import '../../css/Footer.css';
import { Col, Container, Row } from "react-bootstrap";
import { FACEBOOK, INSTAGRAM, TWITTER, YOUTUBE } from "../../constants/Images";

function Footer() {
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
                <Row>
                    <Col><span className="footer-items">one</span></Col>
                    <Col><span className="footer-items">two</span></Col>
                    <Col><span className="footer-items">three</span></Col>
                    <Col>
                        <img src={FACEBOOK} width={50} height={50}/>
                        <img src={INSTAGRAM} width={50} height={50}/>
                    </Col>
                </Row>
                <Row>
                    <Col><span className="footer-items">one</span></Col>
                    <Col><span className="footer-items">two</span></Col>
                    <Col><span className="footer-items">three</span></Col>
                    <Col>
                        <img src={TWITTER} width={50} height={50}/>
                        <img src={YOUTUBE} width={50} height={50}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-3"><span className="footer-items">one</span></Col>
                    <Col className="col-3"><span className="footer-items">two</span></Col>
                    <Col className="col-3"><span className="footer-items">three</span></Col>
                </Row>
                <Row className="mt-4">
                    <Col className="col-3"><span className="footer-items">one</span></Col>
                    <Col className="col-3"><span className="footer-items">two</span></Col>
                    <Col className="col-3"><span className="footer-items">three</span></Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;