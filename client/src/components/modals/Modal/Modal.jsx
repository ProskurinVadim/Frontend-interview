import React, { useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import ReactDOM from "react-dom";

const Modal = ({ onConfirm, okText, onCancel, onHide, cancelText, children, label, className = "",}) => {
    const modalWrapper = useRef(null);
    const modalContainer = document.getElementById("modal-container");
    useEffect(() => {
        const outsideClick = ((e) => {
            e.target === modalWrapper.current && onHide();
        });
        modalWrapper.current.addEventListener("mousedown", outsideClick);
        return () => {
            modalWrapper.current && modalWrapper.current.removeEventListener("mousedown", outsideClick)
        }
    }, [modalWrapper]);
    return ReactDOM.createPortal(
        <div className="modal-background" ref={modalWrapper}>
            <div className={`modal ${className}`}>
                {label &&
                    <h3 className="modal-label">
                        {label}
                    </h3>
                }
                {children}
                <div className="modal-buttons">
                    {okText &&
                        <Button onClick={onConfirm} className="button-common" variant="contained">
                            {okText}
                        </Button>
                    }
                    {cancelText &&
                        <Button onClick={onCancel}  variant="contained" className="button-common button__dangerous">
                            {cancelText}
                        </Button>
                    }
                </div>  
            </div>
        </div>,
        modalContainer
    )
};

export default Modal