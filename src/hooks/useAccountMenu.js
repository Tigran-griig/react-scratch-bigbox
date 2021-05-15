import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {userAction} from "../redux/actions";
import {client} from "../graphQl/client";

const useAccountMenu = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const logout = async () => {
        await localStorage.removeItem('token')
        await client.resetStore()
        dispatch(userAction.fetchUserData())
        history.push('/')
    }

    return {
        logout
    }
}

export default useAccountMenu