import { useCallback } from "react";

export const useFormInput = (state, setState, key) => useCallback((e) => {
    console.log(state)
    const newState = state;
    newState[key] = e.target.value;
    setState({...newState})
},[state]);