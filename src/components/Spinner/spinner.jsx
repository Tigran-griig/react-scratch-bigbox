import React from 'react';
import defaultClasses from './spinner.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import spinner from '../../images/img/gif/200.gif'

const Spinner = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.root}>
            <img src={spinner}/>
        </div>
    );
};

export default Spinner;