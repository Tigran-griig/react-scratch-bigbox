import {gql} from '@apollo/client';

const CLEAR_CART = gql`
    mutation clearCart($shopId: String! ,$cartId:String){
        clearCart(shopId: $shopId,cartId:$cartId)
    }`


export default CLEAR_CART

