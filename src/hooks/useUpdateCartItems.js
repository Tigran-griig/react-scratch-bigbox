import React, {useEffect} from "react";
import {cartAction} from "../redux/actions";
import {useMutation} from "@apollo/client";
import {useDispatch, useSelector} from "react-redux";
import UPDATE_SHOP_ITEM_CART from "../graphQl/mutations/updateCartItems";

const useUpdateCartItems = (quantity,id) => {
    const cartId = useSelector(state=>state.cart.cartId)
    const [updateCartItems, {data}] = useMutation(UPDATE_SHOP_ITEM_CART)
    const dispatch = useDispatch()

    const updateItem = async () => {
        if (cartId) {
            await updateCartItems({
                variables : {
                    cartId:cartId,
                    items:{
                        itemId:id,
                        quantity:quantity
                    }
                }
            })
            dispatch(cartAction.getShopCart())
        }
    }

    useEffect(()=>{
         updateItem()
    },[quantity])


}

export default useUpdateCartItems