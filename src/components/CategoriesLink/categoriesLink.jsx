import React from 'react';
import defaultClasses from './categoriesLink.module.css';
import mergeClasses from "../../helpers/mergeClasses";
import {NavLink} from "react-router-dom";

const CategoriesLink = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {urlKey} = props
    return (
        <div className={classes.root}>
            <NavLink exact to={'/'} className={classes.link}>Գլխավոր</NavLink>
            <span  className={classes.link}>/</span>
            <NavLink exact to={'/'} className={classes.link}>Գրասենյակային</NavLink>
            <span  className={classes.link}>/</span>
            <NavLink exact to={'/'} className={classes.link}>Գրքեր</NavLink>
            <span  className={classes.link}>/</span>
            <NavLink exact to={'/product/'+urlKey} className={classes.link}>{urlKey}</NavLink>
        </div>
    );
};

export default CategoriesLink;


