import React from 'react';
import defaultClasses from './miniCart.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import MiniCartProduct from "./MiniCartProduct";
import {useSelector} from "react-redux";
import Button from "../../Button";
import {Link} from "react-router-dom";

const MiniCart = (props) => {
        const classes = mergeClasses(defaultClasses, props.classes)
        const {isOpen, setIsOpen} = props
        const cart = useSelector(state => state.cart?.cart)
        return (
            <>
                {isOpen && <div onClick={() => setIsOpen(false)} className={"modal"}></div>}
                {isOpen && <div className={classes.root}>
                    <div className={classes.products}>
                        {cart?.items && cart.items.map(item => <MiniCartProduct key={item.id} data={item}/>)}
                    </div>
                    <div className={classes.onlyContainer}>
                        <p className={classes.only}>ԸՆԴԱՄԵՆԸ</p>
                        <p className={classes.grandTotal}>{cart?.grandTotal + "Դ"}</p>
                    </div>
                    <div className={classes.buttons}>
                        <Link to={'/cart'}><Button classes={{button: classes.entireButton}}
                                                   onClick={() => setIsOpen(false)}>ԱՄԲՈՂՋ ԶԱՄԲՅՈՒՂԸ</Button></Link>
                        <Button classes={{button: classes.orderButton}}>ՁԵՎԱԿԵՐՊԵԼ ՊԱՏՎԵՐ</Button>
                    </div>
                </div>
                }
            </>
        );
    }
;

export default MiniCart;