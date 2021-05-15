import React from 'react';
import defaultClasses from './footer.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import footerLogo from '../../images/img/svg/logo-footer.svg'
import paymentIcons from '../../images/img/svg/payment-icons.svg'
import {Link} from "react-router-dom";

const Footer = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)


    return (
        <div className={classes.root}>
            <div className={classes.footerContainer}>
                <div className={classes.box1}>
                    <span className={classes.logo}>
                        <img src={footerLogo}/>
                    </span>
                    <span className={classes.contacts}>
                        <span className={classes.info}>
                            <span className={classes.locationIcon}></span>
                            <p className={classes.text}>Հասցե 3/5, Երեւան, ՀՀ</p>
                        </span>
                          <span className={classes.info}>
                            <span className={classes.emailIcon}></span>
                            <p className={classes.text}>giftshop@gmail.com</p>
                        </span>
                        <span className={classes.info}>
                            <span className={classes.phoneIcon}></span>
                            <p className={classes.text}>(044) 989 - 177</p>
                        </span>
                    </span>
                    <span className={classes.paymentIcons}>
                       <img src={paymentIcons}/>
                    </span>
                </div>
                <div className={classes.box2}>
                    <p className={classes.boxTitle}>ԱՊՐԱՆՔՆԵՐ</p>
                    <div className={classes.border}>
                        <div className={classes.borderText}>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <Link to={'/'} className={classes.link}>Զարդեր</Link>
                        <Link to={'/'} className={classes.link}>Տուփեր</Link>
                        <Link to={'/'} className={classes.link}>Մանկական</Link>
                        <Link to={'/'} className={classes.link}>Կանանց</Link>
                        <Link to={'/'} className={classes.link}>Տան</Link>
                    </div>
                </div>
                <div className={classes.box3}>
                    <p className={classes.boxTitle}>ՀԱՇԻՎ</p>
                    <div className={classes.border}>
                        <div className={classes.borderText}>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <Link to={'/'} className={classes.link}>Իմ Էջը</Link>
                        <Link to={'/'} className={classes.link}>Գրանցվել</Link>
                        <Link to={'/'} className={classes.link}>Մուտք</Link>
                        <Link to={'/'} className={classes.link}>Առաքում</Link>
                        <Link to={'/'} className={classes.link}>Վճարում</Link>
                    </div>
                </div>
                <div className={classes.box4}>
                    <p className={classes.boxTitle}>ԳՐԱՆՑՎԵԼ</p>
                    <div className={classes.border}>
                        <div className={classes.borderText}>
                        </div>
                    </div>
                    <p className={classes.box4Text}>Գրանցվեք նորությունների համար և ստացեք 2% զեղչ:</p>
                    <form className={classes.form}>
                        <input
                            className={classes.input}
                            placeholder={'Էլ. հասցե'}
                        />
                        <button className={classes.button}>
                            ԳՐԱՆՑՎԵԼ
                        </button>
                    </form>
                    <div className={classes.icons}>
                        <Link to={'/'} className={classes.iconLink}>
                            <span className={classes.facebookIcon}></span>
                        </Link>
                        <Link to={'/'}  className={classes.iconLink}>
                            <span className={classes.instagramIcon}></span>
                        </Link>
                        <Link to={'/'}  className={classes.iconLink}>
                            <span className={classes.twitterIcon}></span>
                        </Link>
                        <Link to={'/'}  className={classes.iconLink}>
                            <span className={classes.linkedinIcon}></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;