import React from 'react'
import {useDispatch} from "react-redux";
import {userAction} from "../redux/actions";

const useHeader = () => {
    const dispatch = useDispatch()

    const authType = (type) => {

        return dispatch(userAction.setAuth(type))
    }

    return {
        authType
    }

}

export default useHeader