import { useState } from "react";
import { Button, Col, Row, Form, Collapse, Container } from "react-bootstrap";
import Logo from "../design/Logo";

function Registration() {
    const [extraInfo, setExtraInfo] = useState(false);

    return (
        <>
            <Logo />
            <Container>
                <Row>
                    <Col className="col-5 ms-5">
                        <h1>Needed</h1>
                        <Form id="registration">
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="email@email.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" />
                            </Form.Group>
                            <Collapse in={extraInfo}>
                                <div>
                                    <h4>Optional:</h4>
                                    <Form.Group className="mb-3" controlId="billing">
                                        <Form.Label>Billing address</Form.Label>
                                        <Form.Control type="text" placeholder="Street" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="zipCode">
                                        <Form.Label>Zip code</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter with country code" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="cin">
                                        <Form.Label>CIN</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>
                            </Collapse>
                            < Col >
                                <Button className='mx-4' variant="success" type="submit">
                                    Register
                                </Button>
                                <Button className="mx-4" variant="warning" onClick={() => setExtraInfo((prevState) => !prevState)} aria-controls="example-collapse-text"
                                    aria-expanded={extraInfo}>
                                    {extraInfo ? "Roll it back!" : "Tell more"}
                                </Button>
                                <Button className="mx-4" variant="secondary" onClick={() => document.getElementById("registration").reset()}>
                                    Reset
                                </Button>
                            </Col>
                        </Form>
                    </Col >
                </Row >
            </Container>
        </>
    )
}

export default Registration;