import React, { useState, useEffect } from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import '../../css/Filter.css';

function Filter() {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(10);

    const handlePriceFrom = (e) => {
        setPriceFrom(e.target.value);
    };

    const handlePriceTo = (e) => {
        setPriceTo(e.target.value);
    };

    const fillWidth = `${(priceFrom / 100) * 5}%`;
    const fillColor = priceFrom > 0 ? '#189C43' : '#dc3545';

    useEffect(() => {
        document.documentElement.style.setProperty('--fill-width', fillWidth);
        document.documentElement.style.setProperty('--fill-color', fillColor);
    }, [fillWidth, fillColor]);

    return (
        <>
            <Navbar className="filter ms-1" bg="light" expand="lg">
                <Form>
                    <Form.Group className="mb-3 ms-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3" controlId="formBasicEmail">
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3">
                        <Form.Label>Price from: {priceFrom} €</Form.Label>
                        <Form.Range
                            className="range-slider"
                            min={0}
                            max={1900}
                            step={10}
                            value={priceFrom}
                            onChange={handlePriceFrom}
                            style={{
                                '--fill-width': fillWidth,
                                '--fill-color': fillColor
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3">
                        <Form.Label>Price from: {priceTo} €</Form.Label>
                        <Form.Range
                            className="range-slider"
                            min={0}
                            max={2000}
                            value={priceTo}
                            step={10}
                            onChange={handlePriceTo} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Navbar>


        </>
    )
}

export default Filter;