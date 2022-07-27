import React, { useState } from "react";
import Modal from "../Modal";
import Upload from "../../icons/Upload";
import Box from '@mui/material/Box';
const AddModal = ({ children, label, onCancel, onConfirm }) => {
    const [formData, setFormData] = useState("")
    const [image, setImage] = useState("")
    const handleUploadClick = (e) => {
        const formData = new FormData();
        formData.append("image",e.target.files[0]);
        if (e.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                const path = reader.result;
                setImage((prev) => path);
            };
        }
        setFormData((prev) => (formData));
    };
    return (
        <Modal
            label={label}
            onCancel={onCancel}
            onConfirm={() => onConfirm(formData)}
            onHide={onCancel}
            className="add-modal"
            cancelText="Cancel"
            okText="Submit"
        >
            <Box sx={{ padding: "0 40px", display: 'flex', }}>
                <div className="add-modal-image">
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={handleUploadClick}
                    />
                    <label htmlFor="contained-button-file">
                        {image ? <img src={image} /> : < Upload />}
                    </label>
                </div>
                <div>{children}</div>
            </Box>
        </Modal>
    )
}

export default AddModal