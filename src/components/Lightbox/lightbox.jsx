import React from 'react';
import 'react-image-lightbox/style.css';

import Lightbox from 'react-image-lightbox'

const BaseLightbox = (props) => {
    const {isOpen, setIsOpen, images, photoIndex, setPhotoIndex} = props

    return (
        <div>
            {isOpen && (
                <Lightbox
                    mainSrc={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/"+images[photoIndex].path}
                    nextSrc={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/"+images[(photoIndex + 1) % images.length].path}
                    prevSrc={"https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/"+images[(photoIndex + images.length - 1) % images.length].path}
                    onCloseRequest={() =>  setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length,)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length,)
                    }
                />
            )}
        </div>
    );
};

export default BaseLightbox;