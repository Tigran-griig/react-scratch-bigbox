import React from 'react';
import defaultClasses from './authBlock.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../../redux/actions";


const AuthBlock = (props) => {
    const {children, title} = props
    const classes = mergeClasses(defaultClasses, props.classes)
    const dispatch = useDispatch()
    const width = useSelector(state => state.windowWidth.width)

    return (
        <div className={classes.root}>
            {width > 800 && <span className={classes.close} onClick={() => dispatch(userAction.setAuth(null))}></span>}
            <p className={classes.title}>{title}</p>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
};

export default AuthBlock;