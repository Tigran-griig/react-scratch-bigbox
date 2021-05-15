import React from 'react';
import Input from "../../Input";
import Button from "../../Button";
import defaultClasses from './signUpForm.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import useSignUp from "../../../hooks/useSignUp";

const SignUpForm = (props) => {
    const classes = mergeClasses(defaultClasses,props.classes)
    const {formik} = useSignUp()

    return (
        <form className={classes.root} onSubmit={formik.handleSubmit} >
            <Input
                name="firstName"
                type="text"
                placeholder={'Անուն'}
                className={classes.input}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                touched={formik.touched.firstName}
                error={formik.errors.firstName}
            />
            <Input
                name="lastName"
                type="text"
                placeholder={'Ազգանուն'}
                className={classes.input}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                touched={formik.touched.lastName}
                error={formik.errors.lastName}
            />
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
            <Input
                name="password"
                type="password"
                placeholder={'Գաղտնաբառ'}
                className={classes.input}
                onChange={formik.handleChange}
                value={formik.values.password}
                touched={formik.touched.password}
                error={formik.errors.password}
            />
                <Button classes={{button:classes.signUp}} >ԳՐԱՆՑՎԵԼ</Button>
                <Button classes={{button:classes.through}} onClick={e=>e.preventDefault()} >ԳՐԱՆՑՎԵԼ FACEBOOK-Ի ՄԻՋՈՑՈՎ</Button>
        </form>
    );
};

export default SignUpForm;