import React from "react";
import TableCell from '@mui/material/TableCell';

const TdCell = ({ active, disable, onClick, label }) => {
    return (
        <TableCell
            component="td"
            scope="row"
            className={active ? "cell_selected" : ""}
            onClick={() => (!active) && onClick()}
        >
            {disable === 0 ? "Disable" : label}
        </TableCell>
    )
}

export default TdCell