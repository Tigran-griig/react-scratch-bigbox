import React from "react";
import {useMutation} from "@apollo/client";
import REMOVE_SHOP_ITEM_CART from "../graphQl/mutations/removeItem";
import {useDispatch, useSelector} from "react-redux";
import {cartAction} from "../redux/actions";

const useRemoveItemCart = () => {
    const cartId = useSelector(state => state.cart.cartId)
    const [removeItemFromCart, {data}] = useMutation(REMOVE_SHOP_ITEM_CART)
    const dispatch = useDispatch()

    const removeItem = async (id) => {
        if (cartId) {
            await removeItemFromCart({
                variables : {
                    cartId:cartId,
                    itemId:id
                }

            })
            dispatch(cartAction.getShopCart())
        }
    }


    return {
        removeItem
    }
}

export default useRemoveItemCart