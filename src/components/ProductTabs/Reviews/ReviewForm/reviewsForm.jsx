import React from 'react';
import Input from "../../../Input";
import Button from "../../../Button";

const ReviewsForm = (props) => {
    const {formik, classes} = props
    return (
        <form onSubmit={formik.handleSubmit} className={classes.form}>
            <div className={classes.inputs}>
                <Input
                    name="name"
                    type="text"
                    placeholder={'Անուն'}
                    className={classes.input}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    touched={formik.touched.name}
                    error={formik.errors.name}
                />
                <Input
                    name="email"
                    type="text"
                    placeholder={'Էլ. փոստ'}
                    className={classes.input}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    touched={formik.touched.email}
                    error={formik.errors.email}
                />
            </div>
            <textarea
                name="review"
                type="text"
                placeholder={'Մեկնաբանություն'}
                className={classes.textArea}
                onChange={formik.handleChange}
                value={formik.values.review}
            />
            {formik.touched.review && formik.errors.review &&
            <span className={classes.error}>{formik.errors.review}</span>}
            <Button classes={{button: classes.fromButton}} type="submit">ՈՒՂԱՐԿԵԼ</Button>
        </form>
    );
};

export default ReviewsForm;