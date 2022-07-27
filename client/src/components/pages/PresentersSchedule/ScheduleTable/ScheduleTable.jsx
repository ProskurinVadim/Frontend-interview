import React, { useCallback } from "react";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { isDisable } from "../../../../utils/validation";
import TdCell from "./TdCell";

const array = [0,0, 0, 0, 0, 0, 0, 0, 0];

const ScheduleTable = ({ index, data = [], setPresentor, setTable, time, schedule }) => {

    const handelAddRow = useCallback(() => {
        const j = data.length;
        const tables = array.map((_, i) => isDisable(i, j) === 0 ? "Disable" : "Empty");
        setPresentor({ schedule, tables})
    }, [setPresentor])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Presentors
                        </TableCell>
                        {array.map((_, i) => <TableCell className={(time === index + i) ? "cell_selected" : ""}>{index + i}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row, ir) => (
                            <TableRow key={ir + "change-later"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TdCell
                                    label={row.name}
                                />
                                {
                                    row.tables.map((elem, i) => (
                                        <TdCell
                                            onClick={() => elem !== "Disable" && setTable({ ...row, i, time: i + index, schedule})}
                                            active={time === i + index}
                                            label={elem.label ? elem.label : elem}
                                        />

                                    ))
                                }
                            </TableRow>
                        ))
                    }
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        onClick={handelAddRow}
                    >
                        <TableCell component="td" scope="row" colSpan={8}>
                            Add Row
                        </TableCell>
                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default ScheduleTable