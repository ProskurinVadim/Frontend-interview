import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditList from "../../page-shared/EditList";
import ErrorModal from "../../modals/ErrorModal";
import AddModal from "../../modals/AddModal";
import ModalContent from "./ModalContent";
import { deletePresentor, addPresentor, changePresentor, getPresentorsData, clearError } from "../../../redux/actions/presentorAction";
import { isEmpty } from "../../../utils/validation";
import { formatData, formatPersentor } from "./fixedData";

const PresentersSettings = () => {

    const [presentor, setPresentor] = useState(false);
    const [_error, set_Error] = useState(false)

    const dispatch = useDispatch();
    const { presentors, loading, error } = useSelector(({ presentor }) => presentor, shallowEqual);

    useEffect(() => dispatch(getPresentorsData()), []);

    const handelDelete = (id, index) => dispatch(deletePresentor(id, index));

    const handelCloseModal = () => _error ? set_Error(false) : clearError();

    const handelOpenPresentor = (presentor) => setPresentor(formatPersentor(presentor));

    const handelClosePresentor = () => setPresentor(false);

    const handelSubmit = (file) => {
        console.log(file)
        if (isEmpty(presentor.name)) set_Error("Name can't be empty");
        else {
            presentor._id ? dispatch(changePresentor(presentor, file)) : dispatch(addPresentor(presentor, file));
            handelClosePresentor();
        }
    }
    return (
        <section className="section-color">
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", aliginItems: "center", padding: "20px 0" }}>
                    <p className="text-label text__main text__upercase">Presentors List Settings</p>
                    <Button variant="contained" onClick={() => handelOpenPresentor({})}> Add Presentor</ Button>
                </Box>
                <EditList
                    data={[...formatData(presentors)]}
                    onEdit={handelOpenPresentor}
                    onDelete={handelDelete}
                />
                {presentor && <AddModal label="Add Presentor" onCancel={handelClosePresentor} onConfirm={handelSubmit}>
                    <ModalContent presentor={presentor} setPresentor={setPresentor} />
                </AddModal>}
                {(_error || error) && <ErrorModal onClose={handelCloseModal} error={_error || error} />}
            </Container>
        </section>
    )
}

export default PresentersSettings