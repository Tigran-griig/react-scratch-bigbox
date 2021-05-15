import React from "react";
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from './modal.module.css'

const Modal = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    if (props.isOpen === false) {
        return null
    }
    const close = (e) => {
        e.preventDefault()

        if (props.onClose) {
            props.onClose()
        }
    }

return (
    <div className={classes.modal}>
        <div className={classes.bg} onClick={e => close(e)}/>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
)
}
export default Modal
