import React, {useState} from 'react';
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from './header.module.css';
import logo from '../../images/img/svg/logo.svg';
import {Link} from "react-router-dom";
import bag from '../../images/img/svg/bag 1.svg';
import badge from '../../images/img/svg/badge.svg';
import Search from "../Search";
import Menu from "./Menu/menu";
import {useSelector} from "react-redux";
import Button from "../Button";
import MiniCart from "./MiniCart";
import useHeader from "../../hooks/useHeader";
import BurgerMenu from "../BurgerMenu/burgerMenu";
import useBurgerMenu from "../../hooks/useBurgerMenu";

const Header = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const width = useSelector(state => state.windowWidth.width);
    const [isOpen, setIsOpen] = useState(false)
    const cart = useSelector(state => state.cart?.cart)
    const {authType} = useHeader();
    const {openMenu, setOpenMenu} = useBurgerMenu()
    const isAuth = useSelector(state => state.user.isAuth)

    if (width < 825) {
        return (
            <div className={classes.root}>
                <BurgerMenu open={openMenu} setOpenMenu={setOpenMenu}/>
                <div className={classes.header}>
                    <div className={classes.container}>
                        <div className={classes.contacts}>
                            <Button classes={openMenu ? {button: classes.buttonMenu} : {}}
                                    onClick={() => setOpenMenu(!openMenu)}>
                                <span className={classes.menu}/>
                            </Button>
                        </div>
                        <div className={classes.logo}>
                            <Link className={classes.logoLink} to={'/'}>
                                <img className={classes.logoImg} src={logo}/>
                            </Link>
                        </div>
                        <div className={classes.bag}>
                            <div className={classes.contentBag}>
                                <Search/>
                                <div className={classes.basket}>
                                     <span className={classes.basketBadge}>
                                    {cart?.totalQty ? <span className={classes.badge}>
                                          <span
                                              className={classes.badgeCount}>{cart.totalQty >= 100 ? "99+" : cart.totalQty}</span>
                                            <img src={badge}/>
                                        </span> : <></>}
                                         <Button onClick={() => setIsOpen(!isOpen)}>
                                        <img src={bag}/>
                                    </Button>
                                    </span>
                                    <MiniCart isOpen={isOpen} setIsOpen={setIsOpen}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu/>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.container}>
                    <div className={classes.contacts}>
                        <div className={classes.contactsContent}>
                            <div className={classes.phone}>
                                <span className={classes.phoneIcon}></span>
                                <div className={classes.phoneNumber}>
                                    <p className={classes.phoneNumber}>+044 17216621</p>
                                    <p className={classes.phoneNumber}>+044 17216621</p>
                                </div>
                            </div>
                            <div className={classes.email}>
                                <span className={classes.emailIcon}></span>
                                <div className={classes.phoneNumber}>
                                    <p className={classes.phoneNumber}>contact@bigbox.com</p>
                                </div>
                            </div>
                        </div>
                        {width > 1000 ? <div className={classes.infoShipment}>
                            <span className={classes.busIcon}></span>
                            <p className={classes.shipmentText}>Գործում է առաքում</p>
                        </div> : <></>}
                    </div>
                    <div className={classes.logo}>
                        <Link className={classes.logoLink} to={'/'}>
                            <img className={classes.logoImg} src={logo}/>
                        </Link>
                    </div>
                    <div className={classes.bag}>
                        <div className={classes.contentBag}>
                            <div className={classes.register}>
                                <span className={classes.smileIcon}></span>
                                {!isAuth ?
                                    <div className={classes.buttons}>
                                        <Button onClick={() => authType("SIGN_UP")}>Գրանցում</Button>
                                        <Button onClick={() => authType("SIGN_IN")}>/Մուտք</Button>
                                    </div> : <Link to={'/account'} className={classes.account}>Իմ էջ</Link>
                                }
                            </div>
                            <div className={classes.basket}>
                            <span className={classes.basketBadge}>
                          {cart?.totalQty ? <span className={classes.badge}>
                                      <span
                                          className={classes.badgeCount}>{cart.totalQty >= 100 ? "99+" : cart.totalQty}</span>
                                        <img src={badge}/>
                                    </span> :<></>}
                                <Button onClick={() => setIsOpen(!isOpen)}>
                                <img src={bag}/>
                            </Button>
                            </span>
                                <p className={classes.basketText}>Զամբյուղ</p>
                                <MiniCart isOpen={isOpen} setIsOpen={setIsOpen}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu/>
        </div>
    );
};

export default Header;