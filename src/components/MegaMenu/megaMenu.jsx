import React from 'react';
import defaultClasses from './megaMenu.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import megaMenu from '../../images/img/png/Rectangle 67.png'
import {NavLink} from "react-router-dom";

const MegaMenu = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)


    return (
        <div className={classes.root} onClick={(e) => e.preventDefault()}>
            <div className={classes.block}>
                <p className={classes.title}>ԶՈՒՅԳԵՐԻ</p>
                <div className={classes.links}>
                    <NavLink to={'/'} className={classes.link}>Տղամարդկանց համար</NavLink>
                    <NavLink to={'/'} className={classes.link}>Կանանց համար</NavLink>
                    <NavLink to={'/'} className={classes.link}>Մանկական</NavLink>
                    <NavLink to={'/'} className={classes.link}>Գրասենյակային</NavLink>
                    <NavLink to={'/'} className={classes.link}>Զույգերի համա</NavLink>
                </div>
            </div>
            <div className={classes.block}>
                <p className={classes.title}>ԺԱՄԱՑՈՒՅՑՆԵՐ</p>
                <div className={classes.links}>
                    <NavLink to={'/'} className={classes.link}>Խոհանոցային</NavLink>
                    <NavLink to={'/'} className={classes.link}>Ժամացույցներ</NavLink>
                    <NavLink to={'/'} className={classes.link}>Մեքենայի աքսեսուարներ</NavLink>
                    <NavLink to={'/'} className={classes.link}>Զվարճալի նվերներ</NavLink>
                    <NavLink to={'/'} className={classes.link}>16+</NavLink>
                </div>
            </div>
            <div className={classes.block}>
                <p className={classes.title}>ՄԵՔԵՆԱՅԻ</p>
                <div className={classes.links}>
                    <NavLink to={'/'} className={classes.link}>Գրասենյակային</NavLink>
                    <NavLink to={'/'} className={classes.link}>Զույգերի համար</NavLink>
                    <NavLink to={'/'} className={classes.link}>Խոհանոցային</NavLink>
                    <NavLink to={'/'} className={classes.link}>Ժամացույցներ</NavLink>
                </div>
            </div>
            <div className={classes.block}>
                <p className={classes.title}>ԶՎԱՐՃԱԼԻ</p>
                <div className={classes.links}>
                    <NavLink to={'/'} className={classes.link}>Տղամարդկանց համար</NavLink>
                    <NavLink to={'/'} className={classes.link}>Կանանց համար</NavLink>
                    <NavLink to={'/'} className={classes.link}>Մանկական</NavLink>
                    <NavLink to={'/'} className={classes.link}>Գրասենյակային</NavLink>
                </div>
            </div>
            <div className={classes.blockImg}>
                <img src={megaMenu} className={classes.img}/>
            </div>
        </div>
    );
};

export default MegaMenu;