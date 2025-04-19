
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseButton, Col, Container, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cacheManager from '../../utils/CacheManager';

function Login(props) {
    const [showModal, setShowModal] = useState(props.toggleModal);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const handleClose = props.handleClose;

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const userData = {
                email: email,
                password: password,
                token: null
            }
            cacheManager.validate(userData);
        }
    };

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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        placeholder="Enter email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={validated && !email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        placeholder="Password"
                                        autoComplete='current-password'
                                        required
                                        minLength={6} // Minimum length of password
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={validated && (password.length < 6 || !password)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password must be at least 6 characters.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                            </Form.Group>

                            <Col>
                                <Button className="mx-5" variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button className="mx-5" variant="success" type="button" onClick={() => navigate("/registration")}>
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