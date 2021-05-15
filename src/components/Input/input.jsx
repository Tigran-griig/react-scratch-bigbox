import React from 'react';
import defaultClasses from './input.module.css'
import mergeClasses from "../../helpers/mergeClasses";

const Input = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.root}>
            {props.label && <label className={props.labelClasses}>{props.label}</label>}
            <input
                className={props.className}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            {props.touched && props.error && <span className={classes.error}>{props.error}</span>}

        </div>
    );
};

export default Input;