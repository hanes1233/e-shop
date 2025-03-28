import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';
import { boyImg, girlImg, tagImg } from "../../constants/images";

function Navigation(props) {
    const { backgroundColor, bsTheme, section } = props;

    const url = section.url ? section.url : "home";
    const subcategories = section.subcategories;

    const sortedSubcategories = subcategories.sort((a, b) => {
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });

    const addDefaultImages = (subcategoryName) => {
        switch (subcategoryName) {
            case 'Boys':
                return boyImg
            case 'Girls':
                return girlImg
            case 'Special offer':
                return tagImg
            default: return;
        }
    }

    return (
        <>
            <Navbar bg={backgroundColor ? backgroundColor : "light"} data-bs-theme={bsTheme ? bsTheme : "light"}>
                {section ?
                    <Container>
                        <Navbar.Brand href={url}>{section.name ? section.name : "Default section name"}</Navbar.Brand>
                        <Nav className="me-auto">
                            {subcategories ? sortedSubcategories.map((subcategory, index) => (
                                <Link key={index + 1} className="nav-link mx-3 sub-section" to={section.url + subcategory.url} >
                                    {subcategory.name}
                                    {addDefaultImages(subcategory.name)}
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