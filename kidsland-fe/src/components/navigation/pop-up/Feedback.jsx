import React, { useState } from "react";
import { Button, CloseButton, Form, InputGroup, Modal } from "react-bootstrap";
import { done } from "../../../constants/images";
import { apiPost } from "../../../utils/client";
import { POST_FEEDBACK } from "../../../constants/urls";

function Feedback(props) {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const { showModal, handleClose } = props;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email && emailRegex.test(email);

    const dropValues = () => {
        setEmail('');
        setMessage('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const payload = {
                email: email,
                message: message
            }
            apiPost(POST_FEEDBACK, payload);
            clear();
            setShowAlert(true);
        }
    };

    const clear = () => {
        handleClose();
        dropValues();
        setValidated(false);
    }

    // TODO: separate EmailControl to separate component?

    return (
        <>
            <Modal show={showModal} onHide={clear}>
                <Modal.Header >
                    <Modal.Title>Tell us about your experience</Modal.Title>
                    <CloseButton className='bg-danger' onClick={clear} />
                </Modal.Header>
                <Modal.Body>
                    <Form validated={validated} onSubmit={handleSubmit}>
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

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type here..."
                                    minLength={20}
                                    isInvalid={message && message.length < 20}
                                    isValid={message && message.length >= 20}
                                    required
                                />
                                {/* Invalid Feedback */}
                                <Form.Control.Feedback type="invalid">
                                    Type at least 20 characters.
                                </Form.Control.Feedback>
                                {/* Valid Feedback */}
                                <Form.Control.Feedback type="valid">
                                    Looks good!
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showAlert} onHide={() => setShowAlert(false)}>
                <Modal.Body>
                    <div className="text-center fs-4"><b>Thank you!</b> {done}</div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Feedback;