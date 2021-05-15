import React from 'react';
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from './siteInfo.module.css'



const SiteInfo = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)

    return (
        <div className={classes.root}>
            <div className={classes.block}>
                <div className={classes.ellipse1}>
                        <span className={classes.ellipse1Icon}></span>
                </div>
                <div className={classes.info}>
                    <p className={classes.title}>Արագ Առաքում</p>
                    <p className={classes.text}>Արագ եւ արդյունավետ առաքում</p>
                </div>
            </div>
            <div className={classes.block}>
                <div className={classes.ellipse2}>
                        <span className={classes.ellipse2Icon}></span>
                </div>
                <div className={classes.info}>
                    <p className={classes.title}>Զանգահարեք Մեզ</p>
                    <p className={classes.text}>Միշտ սպասում ենք Ձեր զանգին</p>
                </div>
            </div>
            <div className={classes.block}>
                <div className={classes.ellipse3}>
                        <span className={classes.ellipse3Icon}></span>
                </div>
                <div className={classes.info}>
                    <p className={classes.title}>Բարձրակարգ Սպասարկում</p>
                    <p className={classes.text}>Սիրում ենք մեր հաճախորդներին</p>
                </div>
            </div>
            <div className={classes.block}>
                <div className={classes.ellipse4}>
                        <span className={classes.ellipse4Icon}></span>
                </div>
                <div className={classes.info}>
                    <p className={classes.title}>Որակյալ Նվերներ</p>
                    <p className={classes.text}>Միայն որակյան նվերներ</p>
                </div>
            </div>
        </div>
    );
};

export default SiteInfo;