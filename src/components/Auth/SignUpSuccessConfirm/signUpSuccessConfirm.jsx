import React from 'react';
import defaultClasses from './signUpSuccessConfirm.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import Input from "../../Input";
import Button from "../../Button";
import useSignUpSuccessConfirm from "../../../hooks/useSignUpSuccessConfirm";

const SignUpSuccessConfirm = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const { formik } = useSignUpSuccessConfirm()

    return (
            <form className={classes.root} onSubmit={formik.handleSubmit} >
                <Input
                    name="confirm"
                    type="text"
                    label={'Հաստատման կոդը ուղարկվել է ձէր էլ հասցեին․'}
                    placeholder={'Հաստատման կոդ'}
                    labelClasses={classes.label}
                    className={classes.input}
                    onChange={formik.handleChange}
                    value={formik.values.confirm}
                    touched={formik.touched.confirm}
                    error={formik.errors.confirm}
                />

                <Button classes={{button: classes.confirm}}>Հաստատել</Button>
            </form>
    );
};

export default SignUpSuccessConfirm;


// testUsertest@mail.ru 9808