import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useMutation} from "@apollo/client";
import CLEAR_CART from "../graphQl/mutations/clearCart";
import {cartAction} from "../redux/actions";

const useCart = () => {
    const cartId = useSelector(state => state.cart.cartId)
    const [clearCart] = useMutation(CLEAR_CART, {
        variables: {
            cartId: cartId,
            shopId: "6027c6425b8f3f206fce7366",
        }
    })
    const dispatch = useDispatch()

    const clearItems = async () => {
        await clearCart()
        dispatch(cartAction.getShopCart())
    }

    return {
        clearItems
    }
}

export default useCart