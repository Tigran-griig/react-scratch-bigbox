import React, {useMemo} from 'react'
import * as Yup from "yup";
import {useFormik} from "formik";
import {useMutation} from "@apollo/client";
import SIGN_UP_JS from "../graphQl/mutations/signUp";
import {userAction} from "../redux/actions";
import {useDispatch} from "react-redux";

const useSignUp = () => {
    // const [signUp, {data}] = useMutation(SIGN_UP_JS);
    const dispatch = useDispatch()

    const ValidateFormSchema = useMemo(() => Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'Անունը շատ կարճ է')
            .max(50, 'Անունը շատ երկար է')
            .required('Անունը պարտադիր'),
        lastName: Yup.string()
            .min(3, 'Ազգանունը շատ կարճ է')
            .max(50, 'Ազգանունը շատ երկար է')
            .required('Անունը պարտադիր'),
        email: Yup.string()
            .email('Մուտքագրեք ճիշտ Էլ․ հասցէ')
            .required('Էլ․ հասցեն պարտադիր է!'),
        password: Yup.string()
            .min(6, 'Գաղտնաբառը շատ կարճ է ')
            .required('Գաղտնաբառը պարտադիր է!'),
    }), [])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },

        validationSchema: ValidateFormSchema,

        onSubmit: async (values, updating) => {
            // try {
            //     const response = await signUp({
            //         variables: {
            //             signUpData: {
            //                 firstName: values.firstName,
            //                 lastName: values.lastName,
            //                 username: values.email,
            //                 password: values.password,
            //             }
            //         }
            //     }).then(data => {
            //         if (data.data.signUp.code === 'SignUpSuccessConfirmSent') {
            //             dispatch(userAction.setAuth(data.data.signUp.code))
            //             dispatch(userAction.setUserData(data.data.signUp))
            //         } else {
            //             localStorage.setItem("token", data.data.signUp.accessToken)
            //             dispatch(userAction.fetchUserData())
            //         }
            //     })
            // } catch (err) {
            //     if (err.message === 'UsernameExistsException')
            //         formik.setFieldError('email', 'Այսպիսի էլ հասցե արդեն կա')
            // }
            return values
        },
    });
    return {
        formik,
    }
}

export default useSignUp