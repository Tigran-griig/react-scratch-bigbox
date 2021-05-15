import React from 'react';
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from './select.module.css'
import useSelect from "../../hooks/useSelect";

const Select = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {openSelect, handleChange, isOpen, setIsOpen, value} = useSelect(props.select)

    return (
        <>
            {isOpen && <div className={"modal"} onClick={() => setIsOpen(false)}></div>}
            <div className={classes.root}>
                <div className={classes.select}>
                    <label className={classes.label}>{props.label}</label>
                    <div className={classes.selectBox}>
                        <button className={classes.button} onClick={(e) => openSelect(e)}>{value}
                            <span className={classes.decrease}></span></button>
                        <div style={isOpen ? {padding: "10px 5px"} : {}} className={isOpen ? classes.options : ''}>
                            {isOpen ? props.select.map((item, index) => {
                                return <div onClick={(e) => handleChange(item.value, e)} key={index}
                                            className={value === item.value ? classes.activeOption : classes.option}>
                                    {item.iconPosition === 'left' &&
                                    <span className={classes[item.iconPosition + "Icon"]}
                                          style={{color: item.color}}>&#xe916;</span>}
                                    <span className={classes[item.iconPosition + "Value"]}>{item.value}</span>
                                    {item.iconPosition === 'right' &&
                                    <span className={classes[item.iconPosition + "Icon"]}>&#xe917;</span>}
                                </div>
                            }) : <></>
                            }
                        </div>
                    </div>
                    <select style={{display: 'contents'}} value={value} onChange={e => e}>
                        {props.select.map((item, index) => {
                            return <option key={index + item} value={item.value}>{item.value}</option>
                        })}
                    </select>

                </div>
            </div>
        </>
    );
};


export default Select;


