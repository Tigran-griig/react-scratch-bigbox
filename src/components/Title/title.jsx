import React from 'react';
import defaultClasses from './title.module.css'
import mergeClasses from "../../helpers/mergeClasses";

const Title = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.root}>
            <p className={classes.title}>{props.title}</p>
        </div>
    );
};

export default Title;