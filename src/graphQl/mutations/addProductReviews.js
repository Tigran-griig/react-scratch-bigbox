import {gql} from '@apollo/client';

const ADD_SHOP_PRODUCT_REVIEWS = gql`
    mutation addProductReview($reviewData: ReviewDataInput!){
        addProductReview(reviewData: $reviewData)
    }`


export default ADD_SHOP_PRODUCT_REVIEWS

