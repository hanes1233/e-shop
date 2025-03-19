import React from "react";
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../css/Navbar.css";
import Logo from "../design/Logo";
import { getSection } from "../../constants/sections";

function Category() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.split('/')[1];

    const section = getSection(path);
    const categories = section.categories;

    if (!section || !categories) {
        return (
            <>
                <Logo />
                <h3 className="mt-3 ms-5">No data found</h3>
            </>
        );
    }

    const handleClick = (path) => {
        navigate(path); // Navigate to the clicked category's path
    };

    return (
        <>
            <Logo />
            <Container>
                <h3 className="text-center mb-5">Categories</h3>
                {categories.map((category, index) => {
                    // Render every two categories in a single row
                    const rowIndex = Math.floor(index / 2); // This will group categories into rows
                    return index % 2 === 0 ? (
                        // Start a new row
                        <Row key={rowIndex} className="mb-3">
                            {/* First column (category 1) */}
                            <Col className="col-6">
                                <Container fluid="sm">
                                    <div className="category-container">
                                        <Button
                                            size="lg"
                                            variant="outline-info"
                                            className="w-100 btn-dark-mode"
                                            onClick={() => handleClick(category.path)}
                                            >
                                            {category.name}
                                            {category.image ? category.image : null}
                                        </Button>
                                    </div>
                                </Container>
                            </Col>
                            {/* Second column (category 2) */}
                            {categories[index + 1] && (
                                <Col className="col-6">
                                    <Container fluid="sm">
                                        <div className="category-container">
                                            <Button
                                                size="lg"
                                                variant="outline-info"
                                                className="w-100 btn-dark-mode"
                                                onClick={() => handleClick(categories[index + 1].path)}
                                            >
                                                {categories[index + 1].name}
                                                {categories[index + 1].image ? categories[index + 1].image : null}
                                            </Button>
                                        </div>
                                    </Container>
                                </Col>
                            )}
                        </Row>
                    ) : null;
                })}
            </Container>
            <Outlet />
        </>
    )
}

export default Category;