import {gql} from '@apollo/client';

const GET_SHOP_CARTS = gql`
    query cart($cartId:String!){
        cart(cartId:$cartId){
            id
            totalQty
            subtotal
            shippingTotal
            discountTotal
            couponCode
            grandTotal
            items{
                id
                quantity
                name
                sku
                thumbnail
                price
                discount
                discountType
                discountedPrice
            }
        }
    }`


export default GET_SHOP_CARTS

