import React, { useMemo } from "react";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import NavbarItem from "./NavbarItem";
import { getData } from "./fixedData";

const Navbar = () => {
	const navbarData = useMemo(() => getData(), []);
	const location = window.location.pathname;
	console.log(location)
	return (
		<nav className="navbar">
			<Typography className="text__selected">Vadim Casino</Typography>
			{navbarData.map((elem, i) =>
				<NavbarItem {...elem} key={`navbar-item${i}`} active={location === elem.to} />
			)}

			<Avatar sx={{ width: 32, height: 32 , marginLeft:"auto"}}>M</Avatar>
		</nav>
	)
}

export default Navbar