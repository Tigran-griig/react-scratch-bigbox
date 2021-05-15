import React from 'react';
import defaultClasses from './dashboard.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import AccountMenu from "../AccountMenu";
import {useSelector} from "react-redux";
import Button from "../../Button";
import {Link} from "react-router-dom";

const Dashboard = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const user = useSelector(state => state.user.user)

    console.log(user)
    return (
        <div className={classes.root}>
            <p className={classes.title}>Իմ Հաշիվը</p>
            <div className={classes.container}>
                <div className={classes.menu}>
                    <AccountMenu/>
                </div>
                <div className={classes.content}>
                    <div className={classes.description}>
                        <p className={classes.shortDescription}>Ողջույն,{ ' ' + user.firstName}</p>
                        <p className={classes.longDescription}>
                            Ձեր հաշվում դուք կարող եք տեսնել վերջին պատվերները, ինչպես նաև փոփոխել առաքման հասցեն և
                            <Link className={classes.link} to={'/account'}>  փոխել գաղտնաբառը:</Link>
                        </p>
                    </div>
                    <div className={classes.personalInformation}>
                        <p className={classes.personalTitle}>ԱՆՁՆԱԿԱՆ ԻՆՖՈՐՄԱՑԻԱ</p>
                        <span className={classes.userName}>{user.firstName + ' ' + user.lastName}</span>
                        <span className={classes.userEmail}>{user.email}</span>
                        <div className={classes.links}>
                            <Link className={classes.link} to={'/account'}>Edit</Link>
                            <span className={classes.line}></span>
                            <Link className={classes.link} to={'/account'}>Change Password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;