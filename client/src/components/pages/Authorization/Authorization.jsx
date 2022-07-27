import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Condition, { If, Else } from "../../../hoc/Conditional/Condition";
import Regestration from "./Regestration";
import Login from "./Login";
import ErrorModal from "../../modals/ErrorModal";
import { clearError } from "../../../redux/actions/authActions";

const Authorization = () => {
    const { loading, error } = useSelector(({ auth }) => auth, shallowEqual);
    const dispatch = useDispatch();
    const [type, setType] = useState("login");
    const [_error, set_Error] = useState(false);

    const handelSetType = (ntype) => {
        type !== ntype && setType(() => ntype);
    }
    const handelClearError = () => {
        error ? dispatch(clearError()) : set_Error(false)
    }
    return (
        <section className="authorization-page">
            <div className="authorization-form">
                <h2 className="text-label">Authorization</h2>
                <p className="authorization-toggle">
                    <span onClick={() => handelSetType("login")} className={type === "login" ? "active" : ""}>Sing In</span>
                    /
                    <span onClick={() => handelSetType("registration")} className={type === "registration" ? "active" : ""}>Sing Up</span>
                </p>
                <Condition condition={type === "login"} >
                    <If>
                        <Login setType={handelSetType} loading={loading} />
                    </If>
                    <Else>
                        <Regestration setType={handelSetType} loading={loading} setLocalError={set_Error}/>
                    </Else>
                </Condition>
                <Condition condition={error || _error} >
                    <If>
                        <ErrorModal error={error || _error} onClose={handelClearError} />
                    </If>
                 </Condition>

            </div>
            
        </section>
    )
}

export default Authorization