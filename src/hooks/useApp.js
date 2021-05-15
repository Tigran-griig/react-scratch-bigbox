import React, {useEffect, useLayoutEffect} from 'react';
import useWindowSize from "../helpers/useWindowSize";
import {useDispatch, useSelector} from "react-redux";
import {cartAction, userAction, windowWidthAction} from "../redux/actions";

const useApp = () => {
    const [width] = useWindowSize()
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)

    // useEffect(() => {
    //     dispatch(cartAction.getShopCart())
    //     // dispatch(userAction.fetchUserData())
    //
    // }, [])
    // useEffect(() => {
    //     if(localStorage.getItem('token')){
    //             dispatch(userAction.fetchUserData())
    //     }
    //
    // }, [])


    useLayoutEffect(() => {
        dispatch(windowWidthAction.getWindowWidth(width))
    }, [width])

    return width

};

export default useApp;