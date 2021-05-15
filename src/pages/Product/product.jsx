import React from 'react';
import {useParams} from 'react-router-dom'
import useQuery from "../../hooks/useQuery";
import GET_SHOP_PRODUCT from "../../graphQl/queryies/product";
import defaultClasses from './product.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import Title from "../../components/Title";
import Spinner from "../../components/Spinner";
import ProductImageCarousel from "../../components/ProductImageCarousel/productImageCarousel";
import ProductInfo from "../../components/ProductInfo/productInfo";
import ProductTabs from "../../components/ProductTabs";
import CategoriesLink from "../../components/CategoriesLink";

const Product = (props) => {
    const {urlKey} = useParams()
    const classes = mergeClasses(defaultClasses, props.classes)
    const {data, loading} = useQuery(GET_SHOP_PRODUCT,
        {
            route: urlKey,
        })

    return (
        <div className={classes.root}>
            {loading ?
                (<Spinner/>) :
                data?.resolveUnknownRoute?.item ?
                    (<div className={classes.container}>
                            <div className={classes.product}>
                                <div className={classes.categories}>
                                    <CategoriesLink urlKey={urlKey} />
                                </div>
                                <div className={classes.carousel}>
                                    <ProductImageCarousel
                                        images={data?.resolveUnknownRoute?.item?.images}
                                    />
                                </div>
                                <div className={classes.info}>
                                    <ProductInfo data={data?.resolveUnknownRoute?.item}/>
                                </div>
                                <div className={classes.tabs}>
                                    <ProductTabs data={data?.resolveUnknownRoute?.item}/>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <Title title={'Ապրանքը չի գտնվել'}/>
            }
        </div>

    );
};

export default Product;