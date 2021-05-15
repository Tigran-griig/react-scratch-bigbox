import React from 'react';
import useQuery from "./useQuery";
import GET_SHOP_PRODUCTS from "../graphQl/queryies/products";

const useCarouselProduct = () => {
    const {loading, error, data} = useQuery( GET_SHOP_PRODUCTS, {
        categoryId:"602e537c205367233c805511"
    })
    return data?.getCategoryProducts.products

};

export default useCarouselProduct;