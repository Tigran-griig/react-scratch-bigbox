import React from 'react-router-dom'
import {useMutation} from "@apollo/client";
import {useDispatch, useSelector} from "react-redux";
import {useMemo, useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {userAction} from "../redux/actions";
import UPDATE_CURRENT_CUSTOMER from "../graphQl/mutations/updateCurrentCustomer";

const usePersonalInformation = () => {
    const [updateCurrentCustomer, {data}] = useMutation(UPDATE_CURRENT_CUSTOMER);
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)
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
    }), [])

    const formik = useFormik({
        initialValues: {
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: ValidateFormSchema,

        onSubmit: async (values) => {
            const postData = {}
            for (let key in formik.initialValues) {
                if (formik.initialValues[key] !== values[key]) {
                    postData[key] = values[key]
                }
            }
            if (Object.keys(postData).length !== 0) {
                try {
                    await updateCurrentCustomer({
                        variables: {
                            customerData: postData
                        }
                    })
                    dispatch(userAction.fetchUserData())
                } catch (err) {
                    console.log(err, 'error')
                }
            } else {
                formik.setFieldError("personalInformation", "Փոփոխություներ տեղի չեն ունեցել")
            }
            return values
        },
    });

    return {
        formik,
        setCheck,
        check
    }
}

export default usePersonalInformation