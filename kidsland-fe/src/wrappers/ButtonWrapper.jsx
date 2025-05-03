import React from "react";
import { Button, Row } from "react-bootstrap";

function ButtonWrapper(props) {
    const {name, variant, onClick} = props;

    return (
        <>
            <Row>
                <Button className="mb-2 setting-btn" variant={variant} onClick={onClick}>{name}</Button>
            </Row>
        </>
    )
}

export default ButtonWrapper;