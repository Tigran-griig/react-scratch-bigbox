import React from 'react';
import defaultClasses from './miniCartProduct.module.css'
import mergeClasses from "../../../../helpers/mergeClasses";
import Button from "../../../Button";
import useRemoveItemCart from "../../../../hooks/useRemoveItemCart";

const MiniCartProduct = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {data} = props
    const {removeItem}  = useRemoveItemCart(data.id)

    return (
        <div className={classes.root}>
            <div className={classes.product}>
                <div className={classes.imgContainer}>
                    <img className={classes.img}
                         src={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/" + data.thumbnail}/>
                </div>
                <div className={classes.details}>
                    <p className={classes.name}>{data.name}</p>
                    <p className={classes.price}>{data.price + "Դ"}</p>
                    <p className={classes.quantity}>{data.quantity}</p>
                </div>
            </div>
            <Button onClick={()=>removeItem(data.id)}>
                <span className={classes.icon}></span>
            </Button>
        </div>
    );
};

export default MiniCartProduct;