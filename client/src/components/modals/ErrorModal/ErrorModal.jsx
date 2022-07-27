import React from "react";
import Modal from "../Modal";
import Warning from "../../icons/Warning";
const ErrorModal = ({onClose,error}) => {
    return (
        <Modal
            label={<><Warning className="error-icon" />Oh snap !</>}
            onCancel={onClose}
            cancelText="Close"
            className="error-modal"
            onHide={onClose}
        >
            <p className="text-basic">{error}</p>
        </Modal>
    )
}

export default ErrorModal