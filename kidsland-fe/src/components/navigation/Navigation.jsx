import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';
import { boyImg, girlImg, tagImg } from "../../constants/images";

function Navigation(props) {
    const { backgroundColor, bsTheme, category } = props;

    const url = category.url ? category.url : "home";
    const subcategories = category.subcategories;

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
                {category ?
                    <Container>
                        <Navbar.Brand href={url}>{category.name ? category.name : "Default category name"}</Navbar.Brand>
                        <Nav className="me-auto">
                            {subcategories ? sortedSubcategories.map((subcategory, index) => (
                                <Link key={index + 1} className="nav-link mx-3 sub-section" to={category.url + '/' + subcategory.url} >
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