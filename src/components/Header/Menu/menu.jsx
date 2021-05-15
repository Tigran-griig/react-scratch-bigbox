import React, {useState} from 'react';
import defaultClasses from './menu.module.css';
import mergeClasses from "../../../helpers/mergeClasses";
import {NavLink} from "react-router-dom";
import Search from "../../Search";
import {useSelector} from "react-redux";
import BurgerMenu from "../../BurgerMenu/burgerMenu";
import MegaMenu from "../../MegaMenu";

const Menu = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const width = useSelector(state => state.windowWidth.width)
    const [hoverOther,setHoverOther] =useState(false)

    return (
        <>
            {width > 825 ? <div className={classes.container}>
                <div className={classes.menu}>
                    <NavLink to={'/women'} className={classes.menuLink}>ԿԱՆԱՆՑ</NavLink>
                    <NavLink to={'/men'} className={classes.menuLink}>ՏՂԱՄԱՐԴԿԱՆՑ</NavLink>
                    <NavLink to={'/child'} className={classes.menuLink}>ՄԱՆԿԱԿԱՆ</NavLink>
                    <NavLink to={'/office'} className={classes.menuLink}>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</NavLink>
                    <NavLink to={'/house'} className={classes.menuLink}>ՏԱՆ</NavLink>
                    <NavLink to={'/kitchen'} className={classes.menuLink}>ԽՈՀԱՆՈՑԱՅԻՆ</NavLink>
                    <NavLink to={'/other'} className={classes.menuLink}
                             onMouseEnter={() => setHoverOther(true)}
                             onMouseLeave={() => setHoverOther(false)}
                              >ԱՅԼ
                        {hoverOther && <MegaMenu  />}
                    </NavLink>

                </div>
                <div className={classes.search}>
                    <Search className={{button:classes.search}} />
                </div>
            </div> : <BurgerMenu/>}
        </>
    );
};

export default Menu;