import React, {useState} from 'react';
import defaultClasses from './productImageCarousel.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import useSlider from "../../hooks/useSlider";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import Image from "../Image";
import 'react-image-lightbox/style.css';
import BaseLightbox from "../Lightbox";
import Thumbnail from "./thumbnail";

const ProductImageCarousel = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(null)
    const [sizes, setSizes] = useState([])
    const size = useSlider(sizes)
    const {images} = props

    return (
        <div className={classes.root}>
            <CarouselProvider
                naturalSlideWidth={size.width}
                naturalSlideHeight={size.height}
                totalSlides={images?.length}
                currentSlide={0}
                className={classes.carousel}
            >
                <Slider>
                    {images?.map((item, index) => (
                        <Slide className={classes.slide} index={index} key={index} onClick={() => {
                            setIsOpen(true)
                            setPhotoIndex(index)
                        }}>
                            <div className={classes.imgContainer}>
                                <Image
                                    src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${item.path}`}
                                    className={classes.img}
                                    updateSizes={setSizes}
                                />
                            </div>
                        </Slide>
                    ))}
                </Slider>
                <Thumbnail images={images}/>
            </CarouselProvider>
            <BaseLightbox
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                images={images}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
            />
        </div>
    );
};

export default ProductImageCarousel;


