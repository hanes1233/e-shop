import React from "react";
import { useLocation } from 'react-router-dom';
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../css/Navbar.css";
import Logo from "../design/Logo";
import { getCategories } from "../../constants/categories";

function Category() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    const categories = getCategories(path);

    if (!categories) {
        return (
            <>
                <Logo />
                <h3 className="mt-3 ms-5">No data found</h3>
            </>
        );
    }

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
                                        <Button size="lg" className="w-100">{category.name}</Button>
                                    </div>
                                </Container>
                            </Col>
                            {/* Second column (category 2) */}
                            {categories[index + 1] && (
                                <Col className="col-6">
                                    <Container fluid="sm">
                                        <div className="category-container">
                                            <Button size="lg" className="w-100">{categories[index + 1].name}</Button>
                                        </div>
                                    </Container>
                                </Col>
                            )}
                        </Row>
                    ) : null;
                })}
            </Container>
        </>
    )
}

export default Category;