import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function EmailInput(props) {

    const { email, handleChange } = props;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email && emailRegex.test(email);

    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        isInvalid={email && !isEmailValid}
                        isValid={email && isEmailValid}
                        required
                    />
                    {email && !isEmailValid && (
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email address.
                        </Form.Control.Feedback>
                    )}
                    {email && isEmailValid && (
                        <Form.Control.Feedback type="valid">
                            Looks good!
                        </Form.Control.Feedback>
                    )}
                </InputGroup>
            </Form.Group>
        </>
    )
}

export default EmailInput;