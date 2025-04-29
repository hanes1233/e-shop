import React, { useEffect, useState } from "react";
import { buildMessage } from "../../../utils/validationResultHandler";
import { Modal } from "react-bootstrap";

function AlertMessage({ validationResult }) {
    const [message, setMessage] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const message = buildMessage(validationResult.DETAIL);
        if (message) {
            setMessage(message);
            setShow(true);
        }
    }, [validationResult]);

    return(
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body>
                    {message ? <div className="bg-danger text-light text-center p-2 rounded">{message}</div> : null}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AlertMessage;