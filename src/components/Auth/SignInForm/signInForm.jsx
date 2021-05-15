import React from 'react';
import defaultClasses from './signInForm.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import Input from "../../Input";
import Button from "../../Button";
import {useDispatch} from "react-redux";
import {userAction} from "../../../redux/actions";
import useSignIn from "../../../hooks/useSignIn";

const SignInForm = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const dispatch = useDispatch()
    const {formik} = useSignIn()
    return (
        <form className={classes.root} onSubmit={formik.handleSubmit} >
            {formik.errors.signIn && <span className={classes.signInError}>{formik.errors.signIn}</span>}
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
            <Button classes={{button: classes.restore}}
                    onClick={() => dispatch(userAction.setAuth("RESTORE_PASSWORD"))}>
                Մոռացե՞լ եք գաղտնաբառը
            </Button>
            <Button classes={{button: classes.signIn}}>ՄՈՒՏՔ</Button>
            <Button classes={{button: classes.through}} onClick={e => e.preventDefault()}>
                ՄՈՒՏՔ ԳՈՐԾԵԼ FACEBOOK-Ի ՄԻՋՈՑՈՎ</Button>
            <Button classes ={{button:classes.signUp}}  onClick={()=>dispatch(userAction.setAuth('SIGN_UP'))}>Գրանցվել</Button>
        </form>
    );
};

export default SignInForm;