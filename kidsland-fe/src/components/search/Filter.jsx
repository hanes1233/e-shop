import React, { useState } from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import '../../css/search/Filter.css';
import { Slider } from "@mui/material";

function Filter() {
    const SLIDER_MIN = 0;
    const SLIDER_MAX = 500;

    const [minValue, setMinValue] = useState(SLIDER_MIN + 20);
    const [maxValue, setMaxValue] = useState(SLIDER_MAX - 300);

    return (
        <>
            <Navbar className="filter ms-1" expand="lg">
                <Form>
                    <Form.Group className="mb-3 ms-3" >
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3" >
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select subcategory</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3" >
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
                                const [newMin, newMax] = newValue;
                                if (newMin > maxValue) {
                                    setMinValue(Math.max(maxValue - 10, SLIDER_MIN));
                                } else if (newMax < minValue) {
                                    setMaxValue(Math.min(minValue + 10, SLIDER_MAX));
                                } else {
                                    setMinValue(newMin);
                                    setMaxValue(newMax);
                                }
                            }}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `${value} €`}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3" >
                        <Form.Select aria-label="Default select example">
                            <option value="1">Price - low to high</option>
                            <option value="2">Price - high to low</option>
                            <option value="3">Alphabetic</option>
                            <option value="1">Most popular</option>
                            <option value="2">Rating - low to high</option>
                            <option value="3">Rating - high to low</option>
                            <option value="3">Last added</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 ms-3" >
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Type brand name" />
                    </Form.Group>
                    <Button className="mb-3 ms-3" variant="primary" type="submit">
                        Apply
                    </Button>
                </Form>
            </Navbar>


        </>
    )
}

export default Filter;