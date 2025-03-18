import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

function Navigation(props) {
    const { backgroundColor, bsTheme, section } = props;
    const categories = section.categories;

    const path = section.path ? section.path : "home";

    return (
        <>
            <Navbar bg={backgroundColor ? backgroundColor : "light"} data-bs-theme={bsTheme ? bsTheme : "light"}>
                {section ?
                    <Container>
                        <Navbar.Brand href={path}>{section.name ? section.name : "Default section name"}</Navbar.Brand>
                        <Nav className="me-auto">
                            {categories ? categories.map((category, index) => (
                                <Link key={index + 1} className="nav-link mx-3 sub-section" to={category.path} >
                                    {category.name}
                                    {category.image ? category.image : null}
                                </Link>
                            )) : null}
                        </Nav>
                    </Container>
                    : null}

            </Navbar>
        </>
    )
}

export default Navigation;