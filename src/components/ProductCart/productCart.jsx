import React, {useState} from 'react';
import defaultClasses from './productCart.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import Button from "../Button";
import SelectNumber from "../SelectNumber";
import useRemoveItemCart from "../../hooks/useRemoveItemCart";
import useUpdateCartItems from "../../hooks/useUpdateCartItems";
import {useSelector} from "react-redux";

const ProductCart = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {data} = props
    const width = useSelector(state => state.windowWidth.width)
    const [quantity, setQuantity] = useState(data?.quantity)
    const {removeItem} = useRemoveItemCart()
    useUpdateCartItems(quantity, data.id)

    if (width <= 750) {
        return (
            <div className={classes.root}>
                <div className={classes.product}>
                    <Button classes={{button: classes.remove}} onClick={() => removeItem(data.id)}>
                        <span className={classes.removeIcon}></span>
                    </Button>
                    <img className={classes.img}
                         src={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/" + data.thumbnail}/>
                    <div className={classes.contentContainer}>

                        <div className={classes.block1}>
                            <p className={classes.name}>{data.name}</p>
                            <p className={classes.price}>{data.price + "Դ"}</p>
                        </div>
                    <div className={classes.block2}>
                        <div className={classes.quantity}>
                            <SelectNumber classes={
                                {
                                    input: classes.input,
                                    increase: classes.increase,
                                    increaseButton: classes.increaseButton,
                                    decreaseButton: classes.decreaseButton,
                                    decrease: classes.decrease,
                                    root: classes.container,
                                }} quantity={quantity} setQuantity={setQuantity}/>
                        </div>
                        <div className={classes.grandTotal}>
                            <p>{data.discountPrice ? data.discountPrice + "Դ" : data.price + "Դ"}</p>
                        </div>
                    </div>
                    </div>
                </div>


            </div>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.product}>
                <Button classes={{button: classes.remove}} onClick={() => removeItem(data.id)}>
                    <span className={classes.removeIcon}></span>
                </Button>
                <img className={classes.img}
                     src={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/" + data.thumbnail}/>
                <p className={classes.name}>{data.name}</p>
            </div>
            <div className={classes.price}>
                <p>{data.price + "Դ"}</p>
            </div>
            <div className={classes.quantity}>
                <SelectNumber classes={
                    {
                        input: classes.input,
                        increase: classes.increase,
                        increaseButton: classes.increaseButton,
                        decreaseButton: classes.decreaseButton,
                        decrease: classes.decrease,
                        root: classes.container,
                    }} quantity={quantity} setQuantity={setQuantity}/>
            </div>
            <div className={classes.grandTotal}>
                <p>{data.discountPrice ? data.discountPrice : data.price}</p>
            </div>
        </div>
    );
};

export default ProductCart;