import React, {useState} from 'react'

const useSelect = (select) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState(select[0]?.value)
    const openSelect = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const handleChange = (changed, e) => {
        setIsOpen(false)
        setValue(changed)
    }
    return {
        openSelect,
        handleChange,
        isOpen,
        setIsOpen,
        value
    }
}
export default useSelect