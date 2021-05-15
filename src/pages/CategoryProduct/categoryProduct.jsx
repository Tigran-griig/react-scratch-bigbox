import React from 'react';
import defaultClasses from './categoryProduct.module.css'
import mergeClasses from "../../helpers/mergeClasses";

const CategoryProduct = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.root}>
            <h>Hello World Category</h>
        </div>
    );
};

export default CategoryProduct;