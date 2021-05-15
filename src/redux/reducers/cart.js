const initialState = {
    cart: null,
    cartId:localStorage.getItem('cartId')
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET:CART":
            return {
                ...state,
                cart: payload,
            };
        case "SET:CART-ID":
            return {
                ...state,
                cartId: payload,
            };

        default:
            return state;
    }

}