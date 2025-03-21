
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseButton, Col, Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login(props) {
    const [showModal, setShowModal] = useState(props.toggleModal);
    const navigate = useNavigate();

    const handleClose = props.handleClose;

    return (
        <div
            className="modal overlay"
            style={{ display: 'block', position: 'fixed' }}
        >
            <Container>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Log in</Modal.Title>
                        <CloseButton className='bg-danger' onClick={handleClose} />
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Col>
                                <Button className='mx-5' variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button className='mx-5' variant="success" type="button" onClick={() => navigate("/registration")}>
                                    Registration
                                </Button>
                            </Col>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}

export default Login;