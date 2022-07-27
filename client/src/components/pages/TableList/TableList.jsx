import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Carousel from "./Carousel";
import List from "../../page-shared/List";
import { getTableData } from "../../../redux/actions/tableActions"
import { getCurrentSchedule } from "../../../redux/actions/scheduleActions"
import Container from '@mui/material/Container';

const TableList = () => {
    const dispatch = useDispatch();
    const { data, scheduled_data, error, loading } = useSelector(({ table }) => table, shallowEqual);
    const { current_schedule, loading: schedule_loading } = useSelector(({ schedule }) => schedule, shallowEqual);
    useEffect(() => {
        dispatch(getTableData())
        dispatch(getCurrentSchedule());
    }, [dispatch])
    return (
        <section className="section section-color">
            <Carousel data={current_schedule} data={data} />
            <Container>
                <List data={data} />
            </Container>
        </section>
    )
}

export default TableList