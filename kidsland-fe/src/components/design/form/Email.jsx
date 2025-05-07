import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function Email() {
    // TODO: Map variables to parent component
    const [email, setEmail] = useState('');

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
                        onChange={(e) => setEmail(e.target.value)}
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

export default Email;