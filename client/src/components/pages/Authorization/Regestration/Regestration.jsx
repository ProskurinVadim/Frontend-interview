import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loadable from "../../../../hoc/Loadable";    
import { authRegistration } from "../../../../redux/actions/authActions";

const Regestration = ({ setType,loading,setLocalError }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const handelLoginOnChange = (e) => setLogin(e.target.value);
    const handelPasswordOnChange = (e) => setPassword(e.target.value);
    const handelConfirmPasswordOnChange = (e) => setConfirmPassword(e.target.value);

    const handelConfirm = () => {
        password === confirmPassword ? dispatch(authRegistration(login, password)) : setLocalError("Password must be the same")
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: "space-between", flexDirection: 'column', height: 300
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="login" label="Login" variant="outlined" onChange={handelLoginOnChange} />
            <TextField id="password" label="Password" variant="outlined" onChange={handelPasswordOnChange} />
            <TextField id="confirm-password" label="Confirm Password" variant="outlined" onChange={handelConfirmPasswordOnChange} />
            <Typography onClick={() => setType("login")} className="text-link">Have a account ?</Typography>
            <Loadable loading={loading}>
                <Button variant="contained" onClick={handelConfirm}>Login</Button>
            </Loadable>

        </Box>
    )
}

export default Regestration