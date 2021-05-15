import {client} from "../../graphQl/client";
import GET_SHOP_CARTS from "../../graphQl/queryies/getCart";

const actions = {
    setCart: data => ({
        type: "SET:CART",
        payload: data
    }),

    setCartId: id => ({
        type: "SET:CART-ID",
        payload: id
    }),

    getShopCart:  () => async (dispatch,getState) => {
        const cartId = getState().cart.cartId
        if (cartId) {
            const cart = await client.query({
                query: GET_SHOP_CARTS,
                variables: {
                    cartId: cartId
                },
                fetchPolicy: "no-cache"
            })
            dispatch(actions.setCart(cart.data.cart));
            dispatch(actions.setCartId(cart.data.cart.id));
        }

    },

}

export default actions