import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getPresentorsData } from "../../../redux/actions/presentorAction";
import { getScheduleData, addSchedule, changeScheduleTable } from "../../../redux/actions/scheduleActions";
import { getTableData } from "../../../redux/actions/tableActions";
import Container from '@mui/material/Container';
import ScheduleTable from "./ScheduleTable";
import SelectModal from "../../modals/SelectModal";

const schedule_list = ["morning", "afternoon", "night"];
const schedule_hours = [8, 16, 0];

const PresentersSchedule = () => {

    const [presentor, setPresentor] = useState(false);
    const [table, setTable] = useState(false)

    const dispatch = useDispatch();
    const { loading, error, presentors } = useSelector(({ presentor }) => presentor, shallowEqual);
    const { schedule_data } = useSelector(({ schedule }) => schedule, shallowEqual);
    const { data: tables, loading: tables_loading } = useSelector(({ table }) => table, shallowEqual);

    const freePresentors = presentors.filter((elem) => !elem.reserv);

    useEffect(() => {
        dispatch(getPresentorsData());
        dispatch(getTableData());
        dispatch(getScheduleData());
    }, []);

    const time = (new Date()).getHours();

    const handelSetSchedule = (data) => setPresentor(() => data);

    const handelClosePresentor = () => setPresentor(() => false);

    const handelConfirmPresentor = ({ name }) => dispatch(addSchedule({ name, ...presentor }));

    const handelsetTable = (row) => setTable(() => row);

    const handelCloseTable = () => setTable(() => false);

    const handelConfirmTable = (field) => {
        const { i, time, schedule, ...presentor } = table;
        console.log(presentor)
        presentor.tables[i] = { ...field, time }
        dispatch(changeScheduleTable({ ...presentor, schedule }));
    }

    return (
        <section className="presenters-page section-color">
            <Container>
                <p className="text-heder">Presentation List</p>
                {
                    schedule_list.map((elem, i) => <>
                        <p className="text-heder">{elem} Games</p>
                        <ScheduleTable
                            schedule={elem}
                            index={schedule_hours[i]}
                            data={schedule_data[elem]}
                            setPresentor={handelSetSchedule}
                            setTable={(row) => handelsetTable(row)}
                            time={time}
                        />
                    </>)
                }
                
                {presentor && <SelectModal
                    data={freePresentors}
                    field="name"
                    label="Presentor"
                    onClose={handelClosePresentor}

                    onConfirm={handelConfirmPresentor}
                />}
                {table && <SelectModal
                    data={tables}
                    field="label"
                    label="Table"
                    onClose={handelCloseTable}
                    onConfirm={handelConfirmTable}
                />}
            </Container>
        </section>
    )
}

export default PresentersSchedule