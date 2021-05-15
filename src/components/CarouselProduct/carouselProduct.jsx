import React from 'react';
import ProductCard from "../ProductCard";
import defaultClasses from './carouselProduct.module.css';
import mergeClasses from "../../helpers/mergeClasses";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {useSelector} from "react-redux";
import useCarouselProduct from "../../hooks/useCarouselProduct";

const CarouselProduct = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const width = useSelector(state => state.windowWidth.width)
    const products = useCarouselProduct()

    return (
        <div className={classes.root}>
            <CarouselProvider
                naturalSlideWidth={304}
                naturalSlideHeight={304}
                totalSlides={6}
                visibleSlides={width > 1200 ? 4 : width > 350 ? 2 : 1}
                className={classes.carousel}>
                <Slider>
                    {products ? products?.map((item, index) => {
                            return <Slide key={item.id} index={index}>

                                        <ProductCard item={item} sale={true}
                                                     newProduct={false}
                                                     stockStatus={false}
                                                     rate={4}
                                                     urlKey={item.urlKey}
                                        />
                                   </Slide>
                       })
                       : <></>
                    }
                </Slider>
            </CarouselProvider>
        </div>
    );
};
export default CarouselProduct;