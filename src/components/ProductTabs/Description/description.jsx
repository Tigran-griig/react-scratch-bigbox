import React from 'react';
import defaultClasses from './description.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import SelectNumber from "../../SelectNumber";

const Description = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {description} = props

    return (
        <div className={classes.root}>
            <p className={classes.description}>{description}</p>
            <ul className={classes.list}>
                <li>Ամուր կազմ</li>
                <li>Կորացված անկյուններ</li>
                <li>Առաձգական փակում</li>
                <li>Էջանշան</li>
            </ul>
        </div>
    );
};

export default Description;
