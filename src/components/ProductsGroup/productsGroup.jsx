import React from 'react';
import defaultClasses from './productsGroup.module.css';
import mergeClasses from "../../helpers/mergeClasses";
import ProductCard from "../ProductCard";
import useCarouselProduct from "../../hooks/useCarouselProduct";

const ProductsGroup = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const products = useCarouselProduct()

    return (
        <div className={classes.root}>
            {products ?
                products?.map(item =>
                    <ProductCard classes={{productCard: classes.newProductCard, root: classes.product}}
                                 item={item}
                                 sale={true}
                                 key={item.id}
                                 newProduct={true}
                                 stockStatus={true}
                                 rate={2}/>)
                : <></>}
        </div>
    );
};

export default ProductsGroup;