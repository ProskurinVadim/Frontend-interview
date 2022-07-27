import React, { useMemo } from "react";
import { Route, Switch } from "react-router";
import { getRouters } from "./fixedData";
const Routers = () => {
    const routes = useMemo(() => getRouters(), []);
    return (
        <Switch>
                {
                routes.map(({ path, Component }) =>
                    <Route key={path} exact path={path} component={Component} />)
                }
        </Switch>
    )
};

export default Routers;