import React from "react";
import { Form } from "react-bootstrap";

function SearchBar() {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="What are you looking for?" />
                </Form.Group>
            </Form>
        </>
    )
}

export default SearchBar;