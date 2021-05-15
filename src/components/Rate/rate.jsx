import React, {useState} from 'react';
import defaultClasses from './rate.module.css';
import mergeClasses from "../../helpers/mergeClasses";
import {useRate} from "../../hooks/useRate";

const Rate = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const [newRate, setNewRate] = useState()
    const rate = useRate(props.rate , props.addRating,newRate)

    return (
        <span className={classes.root}>
           {rate?.map((item, index) => <span key={index} className={classes[item]}
                                             onClick={() => props.addRating ?  setNewRate(index + 1) : '' }></span>)}
        </span>
    );
};

export default Rate;