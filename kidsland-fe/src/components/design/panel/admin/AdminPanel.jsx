import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { inbox, invoice, manage, revenue, settings, statistics, task } from "../../../../constants/images";

import Settings from "./menu/Settings";
import Logout from "../../../auth/Logout";
import Logo from "../../Logo";
import ImageWrapper from "../../../../wrappers/ImageWrapper";

function AdminPanel() {
    const [showSettings, setShowSettings] = useState(false);

    // TODO: add statistics on main page (web visitor? sales?) Draw diagram
    const handleSettingsClick = () => {
        setShowSettings((prev) => !prev);
    }

    return (
        <>
            <Settings toggleModal={showSettings} onClose={() => setShowSettings(false)}/>
            <Logo />
            <Logout />
            <Container>
                <Nav>
                    <ImageWrapper image={manage} description={'Manage'} />
                    <ImageWrapper image={revenue} description={'Revenue'} />
                    <ImageWrapper image={task} description={'Desk'} />
                    <ImageWrapper image={inbox} description={'Inbox'} />
                    <ImageWrapper image={invoice} description={'Invoices'} />
                    <ImageWrapper image={statistics} description={'Statistics'} />
                    <ImageWrapper image={settings} description={'Settings'} handleClick={handleSettingsClick} />
                </Nav>
            </Container>
        </>
    )
}

export default AdminPanel;