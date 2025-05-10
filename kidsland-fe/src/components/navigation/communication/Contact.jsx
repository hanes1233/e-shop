import React, { useState } from "react";
import { apiPost } from "../../../utils/client";
import { Button, CloseButton, Form, InputGroup, Modal } from "react-bootstrap";
import { done } from "../../../constants/images";
import EmailInput from "../../design/form/EmailInput";
import MessageInput from "../../design/form/MessageInput";
import '../../../css/communication/Contact.css';
import { POST_EMAIL } from "../../../constants/urls";

function Contact(props) {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isFlying, setIsFlying] = useState(false);

    const { showModal, handleClose } = props;

    const dropValues = () => {
        setEmail('');
        setMessage('');
        setSubject('');
    }

    const handleSend = () => {
        setIsFlying(true);
        setTimeout(() => {
            setIsFlying(false);
        }, 1000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            handleSend();
            const payload = {
                email: email,
                subject: subject,
                message: message
            };
            apiPost(POST_EMAIL, payload);
            setTimeout(() => {
                clear();
                setShowAlert(true);
            }, 1000);
        }
    };

    const clear = () => {
        handleClose();
        dropValues();
        setValidated(false);
        setMessage('');
    }

    return (
        <>
            <Modal show={showModal} onHide={clear}>
                <Modal.Header >
                    <Modal.Title>Tell us about your experience</Modal.Title>
                    <CloseButton className='bg-danger' onClick={clear} />
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <EmailInput email={email} handleChange={(e) => setEmail(e.target.value)} />
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    isInvalid={subject && subject.length < 3}
                                    isValid={subject && subject.length > 3}
                                    required
                                />
                                {subject && subject.length < 3 && (
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a subject.
                                    </Form.Control.Feedback>
                                )}
                                {subject && subject.length > 3 && (
                                    <Form.Control.Feedback type="valid">
                                        Looks good!
                                    </Form.Control.Feedback>
                                )}
                            </InputGroup>
                        </Form.Group>
                        <MessageInput message={message} handleChange={(e) => setMessage(e.target.value)} />
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="transparent" type="submit">
                                <img
                                    src="/icons/paper.png"
                                    alt="flying-paper"
                                    width={50}
                                    height={50}
                                    className={`paper-plane ${isFlying ? 'fly' : ''}`}
                                    // onClick={handleSend}
                                />
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showAlert} onHide={() => setShowAlert(false)}>
                <Modal.Body>
                    <div className="text-center fs-4"><b>Sent</b> {done}</div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Contact;