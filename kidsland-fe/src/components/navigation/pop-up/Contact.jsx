import React, { useState } from "react";
import { apiPost } from "../../../utils/client";
import { Button, CloseButton, Form, InputGroup, Modal } from "react-bootstrap";
import { done } from "../../../constants/images";
import EmailInput from "../../design/form/EmailInput";
import MessageInput from "../../design/form/MessageInput";

function Contact(props) {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [wasTouched, setWasTouched] = useState(false);

    const { showModal, handleClose } = props;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email && emailRegex.test(email);

    const dropValues = () => {
        setEmail('');
        setMessage('');
        setSubject('');
        setWasTouched(false);
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
            apiPost('', payload);
            clear();
            setShowAlert(true);
        }
    };

    const clear = () => {
        handleClose();
        dropValues();
        setValidated(false);
    }

    return (
        <>
            <Modal show={showModal} onHide={clear}>
                <Modal.Header >
                    <Modal.Title>Tell us about your experience</Modal.Title>
                    <CloseButton className='bg-danger' onClick={clear} />
                </Modal.Header>
                <Modal.Body>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <EmailInput email={email} handleChange={(e) => setEmail(e.target.value)} />
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    onBlur={() => setWasTouched(true)}
                                    isInvalid={wasTouched && !subject}
                                    isValid={wasTouched && subject}
                                    required
                                />
                                {subject && !wasTouched && (
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a subject.
                                    </Form.Control.Feedback>
                                )}

                                {subject && wasTouched && (
                                    <Form.Control.Feedback type="valid">
                                        Looks good!
                                    </Form.Control.Feedback>
                                )}
                            </InputGroup>
                        </Form.Group>
                        <MessageInput message={message} handleChange={(e) => setMessage(e.target.value)} />
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

export default Contact;