import {gql} from '@apollo/client';

const GET_SHOP_PRODUCT_REVIEWS = gql`
    query productReviews($productId:String!){
        productReviews(productId:$productId){
            id
            name
            status
            summary
            review
            rating
        }
        
    }`


export default GET_SHOP_PRODUCT_REVIEWS

