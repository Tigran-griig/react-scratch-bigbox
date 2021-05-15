import React, {useMemo} from 'react'
import * as Yup from "yup";
import {useFormik} from "formik";
import {useMutation} from "@apollo/client";
import SIGN_IN_JS from "../graphQl/mutations/signIn";
import {useDispatch} from "react-redux";
import {userAction} from "../redux/actions";

const useSignIn = () => {
    const [signIn, {data}] = useMutation(SIGN_IN_JS);
    const dispatch = useDispatch()

    const ValidateFormSchema = useMemo(() => Yup.object().shape({
        email: Yup.string()
            .email('Մուտքագրեք ճիշտ Էլ․ հասցէ')
            .required('Էլ․ հասցեն պարտադիր է!'),
        password: Yup.string()
            .min(6, 'Գաղտնաբառը շատ կարճ է ')
            .required('Գաղտնաբառը պարտադիր է!'),
    }), [])
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: ValidateFormSchema,
        onSubmit: async (values, updating) => {
            try {
                const data = await signIn({
                    variables: {
                        username: values.email,
                        password: values.password,
                    }
                })

                if (data.data.signIn.accessToken) {
                    await localStorage.setItem("token", data.data.signIn.accessToken)
                    dispatch(userAction.fetchUserData())
                }
            } catch (err) {
                if (err.message === 'UserNotConfirmedException') {
                    dispatch(userAction.setAuth("SignUpSuccessConfirmSent"))
                }
                if (err.message === 'NotAuthorizedException') {
                    formik.setFieldError("signIn", "Սխալ էլ հասցէ կամ գաղտնաբառ")
                }
            }
            return values
        },
    });
    return {
        formik,
    }
}

export default useSignIn