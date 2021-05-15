import {useFormik} from "formik";
import * as Yup from 'yup';
import {useMemo} from "react";
import {useMutation, useQuery} from "@apollo/client";
import ADD_SHOP_PRODUCT_REVIEWS from "../graphQl/mutations/addProductReviews";
import GET_SHOP_PRODUCT_REVIEWS from "../graphQl/queryies/productReviews";

const useReviews = (id, rating, setRating, updating) => {
    const [addProductReview, {data}] = useMutation(ADD_SHOP_PRODUCT_REVIEWS);
    const { loading,error, data:reviews,refetch} = useQuery(GET_SHOP_PRODUCT_REVIEWS, {
        variables: {productId: id}
    })
    const ValidateFormSchema = useMemo(() => Yup.object().shape({
        name: Yup.string()
            .min(2, 'Անունը շատ կարճ է')
            .max(50, 'Անունը շատ երկար է')
            .required('Անունը պարտադիր'),
        email: Yup.string()
            .email('Մուտքագրեք ճիշտ Էլ․ հասցէ')
            .required('Էլ․ հասցեն պարտադիր է!'),
        review: Yup.string()
            .min(2, 'Մեկնաբանությունը շատ կարճ է ')
            .required('Մեկնաբանությունը պարտադիր է!'),
    }), [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            review: '',
        },

        validationSchema: ValidateFormSchema,

        onSubmit: async (values,updating) => {
            const reviewData = {
                productId: id,
                name: values.name,
                review:values.review,
                rating:+rating,
            }

        await addProductReview({
                variables:
                    {
                        reviewData
                    }
            })
            setRating(0)
            formik.resetForm()
            refetch()

            return values
        },
    });
    return {
        formik,
        reviews
    }
}

export default useReviews