import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function MessageInput(props) {
    const {message, handleChange} = props;

    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        value={message}
                        onChange={handleChange}
                        placeholder="Type here..."
                        minLength={20}
                        isInvalid={message && message.length < 20}
                        isValid={message && message.length >= 20}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Type at least 20 characters.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Looks good!
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </>
    )
}

export default MessageInput;