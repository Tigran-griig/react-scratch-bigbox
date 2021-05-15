import React, {useEffect, useState} from 'react'


const useSlider = (sizes) => {
    const [size, setSize] = useState([])
    const max = Math.max.apply(null, sizes.map((el) => el.width));

    const getMaxOfArray = () => {
        sizes.filter((item) => {
            if (item.width === max) {
                setSize(item)
            }
        })
    }
    useEffect(() => {
        getMaxOfArray()
    }, [sizes])

    return size
}


export default useSlider