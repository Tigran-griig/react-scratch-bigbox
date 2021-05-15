import {gql} from '@apollo/client';

const ADD_SHOP_CART = gql`
    mutation addItemToCart($cartId:String,$itemData:ConfigurableCartItemInputData){
        addItemToCart(cartId:$cartId,itemData:$itemData){
            id
        }
    }`


export default ADD_SHOP_CART

