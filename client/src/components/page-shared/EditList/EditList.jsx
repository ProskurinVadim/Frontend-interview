import React from "react";
import EditListItem from "./EditListItem";
import List from '@mui/material/List';
const EditList = ({ data,onEdit,onDelete }) => {
  
    return (
        <List  >
            {data.map((elem, i) =>
                <EditListItem
                    onDelete={() => onDelete(elem._id,i)}
                    onEdit={()=>onEdit(elem)}
                    key={"edit-list-item-" + i}
                    {...elem}
                />
            )}
        </List>
    )
}

export default EditList