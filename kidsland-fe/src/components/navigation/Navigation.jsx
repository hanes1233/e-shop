import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';
import { tagImg, boyImg, girlImg } from "../../constants/images";

function Navigation(props) {
    const backgroundColor = props.backgroundColor;
    const bsTheme = props.bsTheme;

    const section = props.section;
    const specialOffer = props.specialOffer;
    const category = props.category;
    const enableGenderSections = props.enableGenderSections;

    const path = section.path ? section.path : "home";

    function getGenderChoice() {
        return (
            <>
                <Link className="nav-link mx-3 sub-section" to={`${path}/boys`}> {boyImg} Boys </Link>
                <Link className="nav-link mx-3 sub-section" to={`${path}/girls`}> {girlImg} Girls </Link>
            </>
        )
    }

    function getSpecialOfferSection() {
        return (
            <>
                <Link className="nav-link mx-5 sub-section" to={`${path}/offer`}>
                    {tagImg} SPECIAL OFFER
                </Link>
            </>
        )
    }

    return (
        <>
            <Navbar bg={backgroundColor ? backgroundColor : "light"} data-bs-theme={bsTheme ? bsTheme : "light"}>
                {section ?
                    <Container>
                        <Navbar.Brand href={path}>{section.name ? section.name : "Default section name"}</Navbar.Brand>
                        <Nav className="me-auto">
                            {enableGenderSections ? getGenderChoice() : null}
                            {category ? category.map((category, index) => (
                                <Link key={index + 1} className="nav-link mx-3 sub-section" to={category.path} >{category.name}</Link>
                            )) : null}
                            {specialOffer ? getSpecialOfferSection() : null}
                        </Nav>
                    </Container>
                    : null}

            </Navbar>
        </>
    )
}

export default Navigation;