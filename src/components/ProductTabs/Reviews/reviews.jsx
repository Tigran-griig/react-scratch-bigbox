import React, {useState} from 'react';
import defaultClasses from './reviews.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import useReviews from "../../../hooks/useReviews";
import StarRatings from 'react-star-ratings'
import ReviewsForm from "./ReviewForm";
import Spinner from "../../Spinner";


const Reviews = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const [rating, setRating] = useState(0)
    const {formik, reviews} = useReviews(props.id, rating, setRating)

    return (
        <div className={classes.root}>
            {reviews?.productReviews ? reviews?.productReviews?.map((item) => {
                return <div key={item.id} className={classes.opinions}>
                    <div className={classes.rate}>
                        <StarRatings
                            rating={+item.rating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <div className={classes.user}>
                        <span className={classes.name}>{item.name}</span>
                        <span className={classes.date}>01.05.19</span>
                    </div>
                    <p className={classes.opinion}>{item.review}</p>
                </div>

            }) : <Spinner/>}
            <div className={classes.addOpinion}>
                <p className={classes.title}>ԳՐԵԼ ԿԱՐԾԻՔ</p>
                <div className={classes.appraisal}>
                    <span className={classes.text}>Գնահատական</span>
                    <div>
                        <StarRatings
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                            starHoverColor={"orange"}
                            changeRating={(value) => setRating(value)}
                            value={rating}
                            rating={rating}
                        />
                    </div>
                </div>
                <div className={classes.formContainer}>
                    <ReviewsForm classes={classes} formik={formik}/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;