import React from "react";
import EditIcon from "../../../icons/Edit";
import TrashIcon from "../../../icons/Trash"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import defaultImg from "../../../../img/casino/default.jpg";

const EditListItem = ({ label, aditional_label, highlighted_text, description, danger, src, onEdit, onDelete}) => {
    return (
        <ListItem alignItems="flex-start" sx={{ backgroundColor: "#292c37", margin: "20px 0",padding:0}}>
            <Box
                component="img"
                sx={{
                    height: 150,
                    width: 200,
                    marginRight: 5 
                }}
                src={src}
            />
            <ListItemText>
                <h3 className="text-label-small text__main">{label}</h3>
                <Box sx={{ width: 250, display: "flex", justifyContent: "space-between", margin:"5px 0 10px" }}>
                    {aditional_label && <p className="text__main">{aditional_label}</p>}
                    {highlighted_text && <p className={danger ? "text__danger" : "text__selected"}>{highlighted_text}</p>}
                </Box>
                <p className="text__main">{description}</p>
            </ListItemText>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around",height:150, marginRight:4 }}>
                <EditIcon className={`text-heder__small text__main ${danger ? "text__danger" : ""}`} onClick={!danger && onEdit}/>
                <TrashIcon className={`text-heder__small text__main ${danger ? "text__danger" : ""}`} onClick={!danger && onDelete}/>
            </Box>
        </ListItem>
    )
}

EditListItem.defaultProps = {
    src: defaultImg
}
export default EditListItem