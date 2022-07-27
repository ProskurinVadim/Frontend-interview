import React from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import defaultImg from "../../../../img/casino/default.jpg";
import defaultPerson from "../../../../img/presentors/default.jpg";
import { formatHours } from "../../../../utils/format/formatHours";

const ListItem = ({ label, src, description, highlighted_text, price, time, avatar }) => {
    console.log(avatar.src)
    const hours = formatHours(time);
    return (
        <div className="list-item">
            <div className="list-item-image">
                <img src={src} />
                {highlighted_text && <p className="list-item-image-text">{highlighted_text}</p>}
                {avatar.name && <div className="list-item-avatar">
                    <Avatar variant="rounded" src={avatar.src} sx={{ width: 140, height: 200 }}></Avatar>
                    <p className="avatar-text text__main">{avatar.name}</p>
                </div>}
                
            </div>
            <div className="list-item-additional-information">
                {hours && <p className="text__main text-basic">Game start in {hours}</p>}
                <p className="text__main text-basic">Price: {price}</p>
            </div>
            <div className="list-item-information">
                <h3 className="text__main text-label-small">{label}</h3>
                <p className="text__main text-basic-big">{description}</p>
            </div>
            <Button variant="contained" >Register for game</Button>
            
        </div>
    )
}

ListItem.defaultProps = {
    src: defaultImg,
    avatar: {
        src: defaultPerson
    },
}

export default ListItem;