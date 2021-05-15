import React from 'react';
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from "./search.module.css";
import Button from "../Button";

const Search = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <Button classes={{button: classes.button}}>
            <span className={classes.searchIcon}></span>
        </Button>
    );
};

export default Search;