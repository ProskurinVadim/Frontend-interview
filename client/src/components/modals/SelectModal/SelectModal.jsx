import React, { useState } from "react";
import Modal from "../Modal";
import Select from "react-select";

const SelectModal = ({ data, field, onClose, onConfirm,label }) => {
    const [select, setSelect] = useState(false);
    const options = data.map(elem => ({ value: elem, label: elem[field] }));
    console.log(options)
    const handelSelect = ({ value }) => setSelect(value);
    
    const handelConfirm = () => onConfirm(select);
    return (
        <Modal className="select-modal"
            onConfirm={handelConfirm}
            onHide={onClose}
            label={"Select " + label}
            okText="Confirm"
        >
            <Select
                classNamePrefix="select"
                options={options}
                className="select-modal-input"
                onChange={handelSelect}
            />
        </Modal>    
    )
}

export default SelectModal