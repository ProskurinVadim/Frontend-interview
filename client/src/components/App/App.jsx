import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Routers from "./Routers";
import Authorization from "../pages/Authorization";
import Conditional, { If } from '../../hoc/Conditional/Condition';
import Navbar from "../page-shared/Navbar";

const App = () => {
    const { login } = useSelector(({ auth }) => auth, shallowEqual);

    return (
        <BrowserRouter basename="/">
            <Conditional condition={login}>
                <If>
                    <Redirect to={"/casino/tables"} />
                    <Route path="/casino">
                        <Navbar />
                        <Routers />
                    </Route>
                </If>
            </Conditional>
            <Redirect to={"/"} />
            <Route exact path="/" component={Authorization} />
        </BrowserRouter>
    )
}

export default App