import React, {useCallback, useEffect, useState} from "react";

const useImage = (ref, updateSizes, loadImg) => {
    const [size, setSize] = useState({});
    const updateImgSize = useCallback(() => {
        if (ref && ref.current && !size.length && updateSizes) {
            setSize({
                width: ref.current.naturalWidth,
                height: ref.current.naturalHeight,
            })
            return {
                width: ref.current.naturalWidth,
                height: ref.current.naturalHeight,
            }
        }
    }, [ref, updateSizes]);

    useEffect(() => {
        if (loadImg) {
            updateImgSize()
        }
    }, [loadImg])


    useEffect(() => {
        if (updateSizes && loadImg && size.width) {
            updateSizes((sizes) => [...sizes, size])
        }
    }, [size, updateImgSize, updateSizes, loadImg])

    return size
};

export default useImage;
