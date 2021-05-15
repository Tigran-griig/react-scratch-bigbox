import React, {useMemo} from 'react'
import * as Yup from "yup";
import {useFormik} from "formik";

const useRestorePassword = () => {

    const ValidateFormSchema = useMemo(() => Yup.object().shape({
        email: Yup.string()
            .email('Մուտքագրեք ճիշտ Էլ․ հասցէ')
            .required('Էլ․ հասցեն պարտադիր է!')
    }), [])
    const formik = useFormik({
        initialValues: {
            email: '',
        },

        validationSchema: ValidateFormSchema,

        onSubmit: async (values,updating) => {

            return values
        },
    });
    return {
        formik,
    }
}

export default useRestorePassword