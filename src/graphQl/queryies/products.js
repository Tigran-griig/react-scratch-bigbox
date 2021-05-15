import {gql} from '@apollo/client';

const GET_SHOP_PRODUCTS = gql`
            query getCategoryProducts($categoryId:ID!){
                getCategoryProducts(categoryId:$categoryId){
                    products{
                        id
                        name
                        price
                        discountedPrice
                        averageRating
                        urlKey
                        images{
                            path
                        }
                    }
                }
            
            }`



export default GET_SHOP_PRODUCTS

