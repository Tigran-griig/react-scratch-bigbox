import React, {useState} from "react";
import defaultClasses from "./slider.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import {CarouselProvider, Dot, Slide, Slider as BaseSlider} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "../Image";
import useQuery from "../../hooks/useQuery";
import GET_SHOP_SLIDER from "../../graphQl/queryies/slider";
import useSlider from "../../hooks/useSlider";

const Slider = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const {data, loading} = useQuery(GET_SHOP_SLIDER, {sliderId: '606ec4f87a26b539448f40e0'})
    const [sizes, setSizes] = useState([])
    // const size = useSlider(sizes)

    return (
        <div className={classes.root}>
            {/*<CarouselProvider*/}
            {/*    naturalSlideWidth={size.width}*/}
            {/*    naturalSlideHeight={size.height}*/}
            {/*    totalSlides={data?.slider.slides.length}*/}
            {/*    currentSlide={0}*/}
            {/*    className={classes.carousel}*/}
            {/*    hasMasterSpinner={loading}*/}
            {/*>*/}
            {/*    <BaseSlider>*/}
            {/*        {data?.slider.slides.map((item, index) => (*/}
            {/*            <a key={item.id} href={item.link} target={"_blank"} className={classes.slideLink}>*/}

            {/*                <Slide index={index}>*/}
            {/*                    <Image*/}
            {/*                        src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${item.image}`}*/}
            {/*                        className={classes.img}*/}
            {/*                        updateSizes={setSizes}*/}
            {/*                    />*/}
            {/*                    <div className={classes[item.contentPosition]}>*/}
            {/*                        <div className={classes.sliderText}*/}
            {/*                             dangerouslySetInnerHTML={{__html: item.content}}/>*/}
            {/*                        <button className={classes.button} onClick={(e) => {*/}
            {/*                            e.preventDefault()*/}
            {/*                        }*/}
            {/*                        }>ԱՎԵԼԻՆ*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </Slide>*/}
            {/*            </a>*/}


            {/*        ))}*/}
            {/*    </BaseSlider>*/}
            {/*    <div className={classes.buttonPosition}>*/}
            {/*        <div className={classes.sliderButtons}>*/}
            {/*            { data?.slider?.slides?.map((item, index) => (*/}
            {/*                <Dot*/}
            {/*                    slide={index}*/}
            {/*                    className={classes.sliderButton}*/}
            {/*                    key={index + item.id}*/}
            {/*                />*/}
            {/*            )) }*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</CarouselProvider>*/}
        </div>
    );
};

export default Slider;


