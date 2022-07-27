import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getScheduleData } from "../../../redux/actions/scheduleActions";
import Condition, { If, Else } from "../../../hoc/Conditional/Condition";
import Container from '@mui/material/Container';
import List from "../../page-shared/List";
import { formatData } from "./formatData";

const text = ["morning", "afternoon", "night"]

const PresentersList = () => {

    const dispatch = useDispatch()
    const { schedule_data, loading } = useSelector(({ schedule }) => schedule, shallowEqual);

    useEffect(() => dispatch(getScheduleData()), []);

    return (
        <section className="presenters-page section-color">
            <Container>
                <p className="text-heder">Presentation List</p>
                {text.map((elem, i) =>
                    <Condition condition={schedule_data[elem].length} key={"presentor-"+i}>
                        <If>
                            <p className="text-label text__main">{elem} schedule</p>
                            <List data={formatData(schedule_data[elem])} />
                        </If>
                        <Else>
                            <p className="text-label text__main">{elem} schedule</p>
                            <p className="text-label text__main">No games for {elem} </p>
                        </Else>
                    </Condition>
                )}
            </Container>
        </section>
    )
}

export default PresentersList