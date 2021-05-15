import {gql} from '@apollo/client';

const REMOVE_SHOP_ITEM_CART = gql`
    mutation removeItemFromCart($cartId:String ,$itemId: String){
        removeItemFromCart(cartId:$cartId,itemId: $itemId ){
            id
        }
        
    }`

export default REMOVE_SHOP_ITEM_CART

