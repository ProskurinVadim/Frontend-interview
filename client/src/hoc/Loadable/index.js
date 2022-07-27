import React from 'react';
import Condition from "../Conditional/Condition";
import If from "../Conditional/If";
import Else from "../Conditional/Else";

import CircularProgress from '@mui/material/CircularProgress';

const Loadable = ({ loading, children,}) => (
    <Condition condition={loading}>
        <If>
            {
                <CircularProgress />
            }
        </If>
        <Else>
            {children || null}
        </Else>
    </Condition>
);


export default Loadable;
