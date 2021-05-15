import {gql} from '@apollo/client';

const GET_SHOP_PRODUCT = gql`
    query resolveUnknownRoute($route:String!){
        resolveUnknownRoute(route:$route){
            item {
                id
                ...on Product {
                    id
                    name
                    urlKey
                    price
                    discount
                    discountType
                    discountedPrice
                    quantity
                    description
                    shortDescription
                    metaDescription
                    discount
                    discountType
                    quantity
                    description
                    categories
                    shortDescription
                    averageRating
                    images{
                        path
                    }
                    attributes{
                        attributeId
                        label
                        code
                        value
                        valueScoped{
                            scope
                            value
                        }
                    }
                }
            }
        }
    }`


export default GET_SHOP_PRODUCT

