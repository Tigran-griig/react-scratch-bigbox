import React, {useRef, useState} from 'react';
import useImage from "../../hooks/useImage";

const Image = (props) => {
    const imgRef = useRef(null)
    const {updateSizes} = props
    const [loadImg, setLoadImg] = useState()
    useImage(imgRef, updateSizes, loadImg)

    return <img ref={imgRef}
                src={props.src}
                onLoad={(e) =>setLoadImg(e.type)}
                className={props.className}/>

};

export default Image;