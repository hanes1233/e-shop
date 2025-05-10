import React, { useState } from "react";
import { Button, CloseButton, Form, Modal } from "react-bootstrap";
import { done } from "../../../constants/images";
import { apiPost } from "../../../utils/client";
import { POST_FEEDBACK } from "../../../constants/urls";
import EmailInput from "../../design/form/EmailInput";
import MessageInput from "../../design/form/MessageInput";

function Feedback(props) {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const { showModal, handleClose } = props;

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

    // TODO: implement reviews displaying on the main page ? or in separate page?

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

export default Feedback;