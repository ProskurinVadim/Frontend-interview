import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loadable from "../../../../hoc/Loadable";
import { authLogin } from "../../../../redux/actions/authActions";

const Login = ({ setType, loading, setLocalError }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handelLoginOnChange = (e) => setLogin(e.target.value);
    const handelPasswordOnChange = (e) => setPassword(e.target.value);
    
    const handelConfirm = () => {
        console.log("ADS")
        dispatch(authLogin(login, password));
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: "space-between", flexDirection: 'column', height: 220
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="login" label="Login" variant="outlined" onChange={handelLoginOnChange} />
            <TextField id="password" label="Password" variant="outlined" onChange={handelPasswordOnChange} />
            <p onClick={() => setType("registration")} className="text-link">Don't have a account ?</p>
            <Loadable loading={loading}>
                <Button variant="contained" onClick={handelConfirm}>Login</Button>
            </Loadable>
        </Box>
    )
}

export default Login