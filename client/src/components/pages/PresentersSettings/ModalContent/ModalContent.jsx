import React from "react";
import TextField from '@mui/material/TextField';
import { useFormInput } from '../../../../hook/useFormInput';
import Box from '@mui/material/Box';

const ModalContent = ({ presentor, setPresentor }) => {

    const handelNameOnChange = useFormInput(presentor, setPresentor, "name");

    const handelDescriptionOnChange = useFormInput(presentor, setPresentor, "description");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 15, justifyContent: "space-between", height: "100%", width: 300 }}>
            <TextField label="Name" variant="standard" onChange={handelNameOnChange} value={presentor.name} />
            <TextField label="Description" multiline maxRows={6} rows={6} onChange={handelDescriptionOnChange} value={presentor.description} />
        </Box>

    )
}

export default ModalContent;