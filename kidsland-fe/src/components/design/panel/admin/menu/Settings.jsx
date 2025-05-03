import React from "react";
import { Button, Modal, Nav, Row } from "react-bootstrap";
import '../../../../../css/model/Settings.css';
import ButtonWrapper from "../../../../../wrappers/ButtonWrapper";

function Settings({ toggleModal, onClose }) {

    return (
        <>
            <Modal dialogClassName="right" show={toggleModal} onHide={onClose}>
                <Modal.Body>
                    <ButtonWrapper variant="secondary" name="Profile" onClick={null} />
                    <ButtonWrapper variant="secondary" name="Security" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asdas" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asdas" onClick={null} />
                    <ButtonWrapper variant="secondary" name="dsda" onClick={null} />
                    <ButtonWrapper variant="secondary" name="desdes" onClick={null} />
                    <ButtonWrapper variant="secondary" name="desedes" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asdas" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asdasd" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asda" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asdas" onClick={null} />
                    <ButtonWrapper variant="secondary" name="asdasd" onClick={null} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Settings;