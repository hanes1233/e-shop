import React, { useState, useEffect } from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import '../../css/Filter.css';
import { Slider, Typography } from "@mui/material";

function Filter() {
    // Separate states for minValue and maxValue
    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(35);

    // Handle minValue change, ensuring it doesn't exceed maxValue
    const handleMinChange = (event, newMinValue) => {
        // Ensure minValue does not exceed maxValue
        if (newMinValue <= maxValue) {
            setMinValue(newMinValue);
        }
    };

    // Handle maxValue change, ensuring it doesn't go below minValue
    const handleMaxChange = (event, newMaxValue) => {
        // Ensure maxValue does not go below minValue
        if (newMaxValue >= minValue) {
            setMaxValue(newMaxValue);
        }
    };

    return (
        <>
            <Navbar className="filter ms-1" expand="lg">
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
                            <option>Select subcategory</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3" controlId="formBasicEmail">
                        <Form.Label>Size</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Size</option>
                            <option value="1">XXS</option>
                            <option value="2">XS</option>
                            <option value="3">S</option>
                            <option value="1">M</option>
                            <option value="2">L</option>
                            <option value="3">XL</option>
                            <option value="3">XXL</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3">
                        <Form.Label>Price</Form.Label>
                        <Slider
                            className="ms-2"
                            min={0}
                            max={500}
                            step={10}
                            value={[minValue, maxValue]}
                            onChange={(e, newValue) => {
                                // Prevent the minValue from exceeding maxValue, and vice versa
                                const [newMin, newMax] = newValue;
                                if (newMin > maxValue) {
                                    setMinValue(maxValue); // Prevent minValue from exceeding maxValue
                                } else if (newMax < minValue) {
                                    setMaxValue(minValue); // Prevent maxValue from going below minValue
                                } else {
                                    setMinValue(newMin);
                                    setMaxValue(newMax);
                                }
                            }}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `${value} €`}
                        />
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