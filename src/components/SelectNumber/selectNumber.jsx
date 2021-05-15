import React from 'react';
import defaultClasses from './selectNumber.module.css'
import mergeClasses from "../../helpers/mergeClasses";

const SelectNumber = (props) => {
        const classes = mergeClasses(defaultClasses, props.classes)
        const {quantity, setQuantity} = props

        return (
            <div className={classes.root}>
                <button className={classes.increaseButton} onClick={() => setQuantity(quantity + 1)}>
                    <span className={classes.increase}></span>
                </button>
                <input type={"number"} className={classes.input} min="0" onChange={(e) => e} value={quantity}/>
                <button className={classes.decreaseButton} onClick={() => !quantity <= 0 ? setQuantity(quantity - 1) : setQuantity(0)}>
                    <span className={classes.decrease}></span>
                </button>
            </div>
        )
    }
;

export default SelectNumber;


