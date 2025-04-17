import React from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../css/navigation/Navbar.css";
import GuestHeader from "./api/GuestHeader";

function Category({ category }) {
    const navigate = useNavigate();

    const subcategories = category.subcategories;

    if (!subcategories) {
        return (
            <>
                <GuestHeader />
                <h3 className="mt-3 ms-5">No data found</h3>
            </>
        );
    }

    const handleClick = (path) => {
        navigate(path); // Navigate to the clicked category's path
    };

    return (
        <>
            <GuestHeader />
            <Container>
                <h3 className="text-center mb-5">Categories</h3>
                {subcategories.map((subcategory, index) => {
                    // Render every two subcategories in a single row
                    const rowIndex = Math.floor(index / 2); // This will group subcategories into rows
                    return index % 2 === 0 ? (
                        // Start a new row
                        <Row key={rowIndex} className="mb-3">
                            {/* First column (subcategories 1) */}
                            <Col className="col-6">
                                <Container fluid="sm">
                                    <div className="category-container">
                                        <Button
                                            size="lg"
                                            variant="outline-info"
                                            className="w-100 btn-dark-mode"
                                            onClick={() => handleClick(category.url + "/" + subcategory.url)}
                                            >
                                            {subcategory.name}
                                            {subcategory.image ? subcategory.image : null}
                                        </Button>
                                    </div>
                                </Container>
                            </Col>
                            {/* Second column (subcategories 2) */}
                            {subcategories[index + 1] && (
                                <Col className="col-6">
                                    <Container fluid="sm">
                                        <div className="category-container">
                                            <Button
                                                size="lg"
                                                variant="outline-info"
                                                className="w-100 btn-dark-mode"
                                                onClick={() => handleClick(category.url + '/' + subcategories[index + 1].url)}
                                            >
                                                {subcategories[index + 1].name}
                                                {subcategories[index + 1].image ? subcategories[index + 1].image : null}
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