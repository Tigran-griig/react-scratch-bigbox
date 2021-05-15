import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../../Button";
import defaultClasses from './accountMenu.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import useAccountMenu from "../../../hooks/useAccountMenu";

const AccountMenu = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {logout} = useAccountMenu()

    return (
        <div className={classes.root}>
            <NavLink exact to={'/account/dashboard'} className={classes.link}>ԳԼԽԱՎՈՐ</NavLink>
            <NavLink exact to={'/account/orders'} className={classes.link}>ՊԱՏՎԵՐՆԵՐ</NavLink>
            <NavLink exact to={'/account/addresses'} className={classes.link}>ՀԱՍՑԵՆԵՐ</NavLink>
            <NavLink exact to={'/account'} className={classes.link}>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</NavLink>
            <Button classes={{button: classes.logout}} onClick={logout}>ԵԼՔ</Button>
        </div>
    );
};

export default AccountMenu;