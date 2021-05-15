import React from 'react';
import defaultClasses from './burgerMenu.module.css';
import mergeClasses from "../../helpers/mergeClasses";

const BurgerMenu = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <>
            {props.open ? <div className={classes.burger}>
                <span onClick={() => props.setOpenMenu(false)} className={classes.close}></span>
            </div> : <></>}
        </>
    );
};

export default BurgerMenu;