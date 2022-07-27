import React from "react";
import ListItem from "./ListItem";
const List = ({ data }) => {
    return (
        <div className="list">
            {data.map((elem,i) => <ListItem {...elem} key={"list-item-"+i} />)}
        </div>
    )
}

export default List;