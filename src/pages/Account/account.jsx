import React from 'react';
import defaultClasses from './account.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import {Route, Switch} from 'react-router-dom'
import PersonalInformation from "../../components/Account/PersonalInformation";
import Dashboard from "../../components/Account/Dashboard";


const Account = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path={'/account'} component={PersonalInformation}/>
                <Route exact path={'/account/dashboard'} component={Dashboard}/>
            </Switch>
        </div>
    );
};

export default Account;