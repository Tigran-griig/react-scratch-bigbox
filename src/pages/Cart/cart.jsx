import React from 'react';
import defaultClasses from './cart.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import {useSelector} from "react-redux";
import ProductCart from "../../components/ProductCart";
import Button from "../../components/Button";
import useCart from "../../hooks/useCart";

const Cart = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const cart = useSelector(state => state.cart.cart)
    const width = useSelector(state => state.windowWidth.width)
    const {clearItems} = useCart()

    return (
        <div className={classes.root}>
            <p className={classes.title}>Զամբյուղ</p>
            <div className={classes.products}>
                {width > 750 && <div className={classes.table}>
                    <p className={classes.product}>ԱՊՐԱՆՔ</p>
                    <p className={classes.price}>ԳԻՆ</p>
                    <p className={classes.quantity}>ՔԱՆԱԿ</p>
                    <p className={classes.only}>ԸՆԴԱՄԵՆԸ</p>
                </div>}
                <div className={classes.content}>
                    {cart && cart?.items.map(item => <ProductCart key={item.id} data={item}/>)}
                </div>
                <div className={classes.grandTotal}>
                    <p className={classes.grandPrice}>ԸՆԴԱՄԵՆԸ:{cart?.grandTotal}</p>
                    <p className={classes.summary}>Shipping, taxes, and discounts will be calculated at checkout </p>
                </div>
                <div className={classes.buttons}>
                    <Button classes = {{button:classes.continueShopping}} onClick={clearItems}>
                        Մաքրել Զամբյուղը
                    </Button>
                    <Button classes = {{button:classes.continueShopping}}>
                        ՇԱՐՈՒՆԱԿԵԼ ԳՆՈՒՄՆԵՐԸ
                    </Button>
                    <Button classes = {{button:classes.order}}>
                        ՁԵՎԱԿԵՐՊԵԼ ՊԱՏՎԵՐԸ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;