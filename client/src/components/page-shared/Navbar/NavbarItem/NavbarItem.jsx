import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavberItem = ({ text, to, additionalMenu }) => {
    const [open, setOpen] = useState(false);
    const handelOpen = () => setOpen(() => true);
    const handelClose = () => setOpen(() => false);
    console.log(open)
    return (
        <div className="navbar-item">
            <p onMouseEnter={handelOpen}><Link to={to}>{text}</Link></p>
            {open && <ul onMouseLeave={handelClose} className="navbar-item-menu">
                {additionalMenu.map((elem, i) =>
                    <li className="navbar-item-menu-item" key={"navbar-item-menu-item"+i}>
                        <Link to={elem.to}>{elem.text}</Link>
                    </li>
                )}
            </ul>}
        </div>
    )
}

export default NavberItem