import React from 'react';
import defaultClasses from './auth.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import AuthBlock from "../../components/Auth/AuthBlock/authBlock";
import {useSelector} from "react-redux";
import useHeader from "../../hooks/useHeader";
import Modal from "../../components/Modal";
import SignUpForm from "../../components/Auth/SignUpForm";
import SignInForm from "../../components/Auth/SignInForm";
import RestorePasswordForm from "../../components/Auth/RestorePasswordForm";
import SignUpSuccessConfirm from "../../components/Auth/SignUpSuccessConfirm";

const AuthPage = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {auth, width} = useSelector(state => {
        return {
            auth: state.user.authType,
            width: state.windowWidth.width
        }
    })
    const {authType} = useHeader()

    if (width < 800) {
        return (
            <div className={classes.root}>
                <AuthBlock
                    title={auth === "RESTORE_PASSWORD" ? 'Վերականգնել գաղտնաբառը' :
                        auth === "SignUpSuccessConfirmSent" ?
                            'Խնդրում ենք հաստատել գրանցումը' :
                            auth === "SIGN_UP" ? 'Գրանցում' : 'Մուտք'}
                >

                    {auth === "SIGN_UP" && <SignUpForm/>}
                    {auth === "SIGN_IN" && <SignInForm/>}
                    {auth === "RESTORE_PASSWORD" && <RestorePasswordForm/>}
                    {auth === "SignUpSuccessConfirmSent" && <SignUpSuccessConfirm/>}
                </AuthBlock>
            </div>
        )
    }
    return (
        <div className={classes.root}>
            <Modal isOpen={auth} onClose={() => authType(null)}>
                <AuthBlock
                    title={auth === "RESTORE_PASSWORD" ? 'Վերականգնել գաղտնաբառը' :
                        auth === "SignUpSuccessConfirmSent" ?
                            'Խնդրում ենք հաստատել գրանցումը' :
                            auth === "SIGN_UP" ? 'Գրանցում' : 'Մուտք'}
                >
                    {auth === "SIGN_UP" && <SignUpForm/>}
                    {auth === "SIGN_IN" && <SignInForm/>}
                    {auth === "RESTORE_PASSWORD" && <RestorePasswordForm/>}
                    {auth === "SignUpSuccessConfirmSent" && <SignUpSuccessConfirm/>}

                </AuthBlock>
            </Modal>
        </div>
    );
};

export default AuthPage;



