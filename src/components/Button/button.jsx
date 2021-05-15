import React from 'react';
import defaultClasses from './button.module.css'
import mergeClasses from "../../helpers/mergeClasses";

const Button = (props) => {
    const classes = mergeClasses(defaultClasses,props.classes)

    return (
        <button className={classes.button} {...props}>
            {props.children}
        </button>
    );
};

export default Button;