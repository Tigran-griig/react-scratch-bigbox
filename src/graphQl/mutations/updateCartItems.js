import {gql} from '@apollo/client';

const UPDATE_SHOP_ITEM_CART = gql`
    mutation updateCartItems($cartId:String ,$items: [UpdateCartItemInput]){
        updateCartItems(cartId:$cartId,items: $items ){
            id
        }
    }`

export default UPDATE_SHOP_ITEM_CART

