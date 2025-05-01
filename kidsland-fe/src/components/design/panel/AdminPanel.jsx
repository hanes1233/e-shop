import React from "react";
import ApiHeader from "../../navigation/api/ApiHeader";
import { Card, Container, Nav } from "react-bootstrap";

function AdminPanel() {
    return (
        <>
            <ApiHeader />
            <Container>
                <Nav>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card1</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card2</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card1</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card2</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card1</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card2</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="item-card me-5 ms-3">
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>card1</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                </Nav>
            </Container>
        </>
    )
}

export default AdminPanel;