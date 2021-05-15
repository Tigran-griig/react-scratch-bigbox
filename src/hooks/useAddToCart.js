import React, {useCallback} from 'react'
import {useMutation} from "@apollo/client";
import CREATE_CARD from "../graphQl/mutations/createCard";
import ADD_SHOP_CART from "../graphQl/mutations/addItemToCart";
import {client} from "../graphQl/client";
import {useDispatch, useSelector} from "react-redux";
import {cartAction} from "../redux/actions";


const useAddToCart = ( productId) => {
    const [createCart, {data}] = useMutation(CREATE_CARD);
    const dispatch = useDispatch()
    const cartId = useSelector(state => state.cart.cartId)

    const getCartId = useCallback(async () => {
        if (!cartId) {
            const cart = await createCart()
            await localStorage.setItem('cartId', cart.data.createCart)
            dispatch(cartAction.setCartId(cart.data.createCart))
            return cart.data.createCart
        } else {
            return cartId
        }

    }, [cartId])

    const addToCard = useCallback(async (quantity) => {
        const cartId = await getCartId()
        try {
            if (cartId) {
                const response = await client.mutate({
                    mutation: ADD_SHOP_CART,
                    variables: {
                        cartId: cartId,
                        itemData: {
                            productId: productId,
                            quantity: quantity
                        }
                    }
                })
                dispatch(cartAction.getShopCart())
            }
        } catch (error) {
            console.log(error)
        }

    }, [cartId])

    return {
        addToCard,
    }
}

export default useAddToCart