import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormInput } from '../../../../hook/useFormInput';

const ModalContent = ({ table, setTable }) => {

    const handelNameOnChange = useFormInput(table, setTable, "label");

    const handelPriceOnChange = useFormInput(table, setTable, "price");

    const handelHiglightedOnChange = useFormInput(table, setTable, "higlighted_text");

    const handelDescriptionOnChange = useFormInput(table, setTable, "description");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 15, justifyContent: "space-between", height:"100%", width:300}}>
            <TextField label="Name" variant="standard" onChange={handelNameOnChange} value={table.label} />
            <TextField label="Price" variant="standard" onChange={handelPriceOnChange} value={table.price}/>
            <TextField label="Higlighted Text" variant="standard" onChange={handelHiglightedOnChange} value={table.higlighted_text}/>
            <TextField label="Description" onChange={handelDescriptionOnChange} multiline rows={4} value={table.description}/>

        </Box>
    )
}

export default ModalContent