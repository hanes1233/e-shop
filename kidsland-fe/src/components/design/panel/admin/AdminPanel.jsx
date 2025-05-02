import React from "react";
import ApiHeader from "../../../navigation/api/ApiHeader";
import { Container, Nav } from "react-bootstrap";
import { inbox, invoice, manage, revenue, settings, statistics, task } from "../../../../constants/images";

function AdminPanel() {

    // TODO: add statistics on main page (web visitor? sales?) Draw diagram
    const imageWrapper = (image, description) => {
        return (
            <>
                <div className="me-5 ms-5">
                    <div className="image-card">{image}</div>
                    <p className="ms-1 mt-1">{description}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <ApiHeader />
            <Container>
                <Nav>
                    {imageWrapper(manage, 'Manage')}
                    {imageWrapper(revenue, 'Revenue')}
                    {imageWrapper(task, 'Desk')}
                    {imageWrapper(inbox, 'Inbox')}
                    {imageWrapper(invoice, 'Invoices')}
                    {imageWrapper(statistics, 'Statistics')}
                    {imageWrapper(settings, 'Settings')}
                </Nav>
            </Container>
        </>
    )
}

export default AdminPanel;