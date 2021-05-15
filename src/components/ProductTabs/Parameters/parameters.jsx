import React from 'react';
import defaultClasses from './parameters.module.css'
import mergeClasses from "../../../helpers/mergeClasses";

const Parameters = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {attributes} = props

    return (
        <div className={classes.root}>
            <table>
                <tbody>
                {attributes.map((item, index) => {
                    return <tr key={index}>
                        <td className={classes.label}>{item.label}</td>
                        <td className={classes.value}>{item.value}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Parameters;