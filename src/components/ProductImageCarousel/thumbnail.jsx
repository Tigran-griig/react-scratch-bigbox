import React from 'react';
import defaultClasses from './thumbnail.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import {ButtonBack, ButtonNext, Dot} from 'pure-react-carousel'
import img from  '../../images/img/png/super.png'
const Thumbnail = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {images} = props

    return (
        <div className={classes.root}>
            <ButtonBack className={classes.iconLeft}></ButtonBack>
            <div className={classes.container}>
            <div className={classes.thumbnail}>
                {images?.map((item, index) => {
              return      <Dot key={index} slide={index} className={classes.thumbnailButton}>
                        <img className={classes.img}
                             src={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/"+item.path}
                        />
                    </Dot>
                })}
            </div>
            </div>
            <ButtonNext className={classes.iconRight}></ButtonNext>


        </div>
    );
};

export default Thumbnail;