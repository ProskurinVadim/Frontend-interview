import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTableData, deleteTable, clearError, addTable, changeTable } from "../../../redux/actions/tableActions";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ModalContent from "./ModalContent";
import EditList from "../../page-shared/EditList";
import ErrorModal from "../../modals/ErrorModal";
import AddModal from "../../modals/AddModal";
import { isEmpty, isFit, isNumber } from "../../../utils/validation"
import { formatData } from "./fixedData";

const fields = { description: "", label: "", price: 0, higlighted_text: "" };

const TableListSettings = () => {

    const [table, setTable] = useState(false);
    const [_error, set_Error] = useState(false)

    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(({ table }) => table, shallowEqual);

    useEffect(() => dispatch(getTableData()), [dispatch]);

    const handelDelete = (_id, index) => dispatch(deleteTable(_id, index));

    const handelCloseModal = () => _error ? set_Error(false) : clearError();
    
    const handelOpenTable = (table) => setTable(table);

    const handelCloseTable = () => setTable(false);

    const handelSubmit = (file) => {
        if (isEmpty(table.label)) set_Error("Name can't be empty");
        else if (!isNumber(table.price)) set_Error("Price must be a number");
        else if (isFit(table.higlighted_text)) set_Error("highlighted text must be less then 20 symbols");
        else {
            
            table._id ? dispatch(changeTable(table, file)) : dispatch(addTable(table,file))
            handelCloseTable();
        }
    }

    return (
        <section className="section-color">
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between",aliginItems:"center", padding: "20px 0" }}>
                    <p className="text-label text__main text__upercase">Table List Settings</p>
                    <Button variant="contained" onClick={() => handelOpenTable(fields)}> Add Table</ Button>
                </Box>
                <EditList
                    data={formatData(data)}
                    onEdit={handelOpenTable}
                    onDelete={handelDelete}
                />
                {table && <AddModal label="Add Table" onCancel={handelCloseTable} onConfirm={handelSubmit}>
                    <ModalContent table={table} setTable={setTable} />
                </AddModal>}
                {(_error || error) && <ErrorModal onClose={handelCloseModal} error = {_error || error} />}
            </Container>
        </section>
    )
};

export default TableListSettings;