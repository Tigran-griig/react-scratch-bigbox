import React from 'react';
import defaultClasses from './restorePasswordForm.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import Input from "../../Input";
import Button from "../../Button";
import {userAction} from "../../../redux/actions";
import {useDispatch} from "react-redux";
import useRestorePassword from "../../../hooks/restorePassword";

const RestorePasswordForm = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const dispatch = useDispatch()
    const {formik} = useRestorePassword()

    return (
        <form className={classes.root}  onSubmit={formik.handleSubmit}>
            <p className={classes.title}>Դուք կստանաք գաղտնաբառը վերականգնելու նամակ։</p>
            <Input
                name="email"
                type="email"
                placeholder={'Էլ. Փոստ'}
                className={classes.input}
                onChange={formik.handleChange}
                value={formik.values.email}
                touched={formik.touched.email}
                error={formik.errors.email}
            />
            <Button type={'submit'} classes={{button: classes.restore}}>
                ՎԵՐԱԿԱՆԳՆԵԼ
            </Button>
            <Button classes={{button: classes.cancel}} type={"submit"}
                    onClick={() => dispatch(userAction.setAuth('SIGN_IN'))}>Չեղարկել</Button>
        </form>
    );
};

export default RestorePasswordForm;