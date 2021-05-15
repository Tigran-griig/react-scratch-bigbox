import React, {useMemo} from 'react'
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useMutation} from "@apollo/client";
import SIGN_UP_CONFIRM from "../graphQl/mutations/signUpConfirm";
import {userAction} from "../redux/actions";


const useSignUpSuccessConfirm = () => {
    const dispatch = useDispatch()
    const [signUpConfirm, {data}] = useMutation(SIGN_UP_CONFIRM);
    const userId = useSelector(state => state.user.userId)


    const ValidateFormSchema = useMemo(() => Yup.object().shape({
        confirm: Yup.string()
            .min(3, 'հաստատման կոդը շատ կարճ է ')
            .required('հաստատման կոդը պարտադիր է!'),
    }), [])
    const formik = useFormik({
        initialValues: {
           confirm:''
        },
        validationSchema: ValidateFormSchema,
        onSubmit: async (values,updating) => {
            if(userId){
                signUpConfirm({
                    variables: {
                        username: 'tigran@mail.ru',
                        userId: "608015f502a39f0b0a5c5a4f",
                        confirmationCode: values.confirm,
                    }
                })
            }
           dispatch(userAction.setAuth('SIGN_IN'))
            return values
        },
    });
    return {
        formik,
    }
}

export default useSignUpSuccessConfirm