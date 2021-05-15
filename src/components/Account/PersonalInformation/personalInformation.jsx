import React from 'react';
import AccountMenu from "../AccountMenu";
import defaultClasses from './personalInformation.module.css'
import mergeClasses from "../../../helpers/mergeClasses";
import usePersonalInformation from "../../../hooks/usePersonalInformation";
import Input from "../../Input";
import Button from "../../Button";

const PersonalInformation = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {formik, setCheck, check} = usePersonalInformation()

    return (
        <div className={classes.root}>
            <p className={classes.title}>Անձնական Տվյալներ</p>
            <div className={classes.container}>
                <div className={classes.menu}>
                    <AccountMenu/>
                </div>
                <div className={classes.content}>
                    {formik.errors.personalInformation &&
                    <span className={classes.personalInformationError}>{formik.errors.personalInformation}</span>}
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            name="firstName"
                            type="firstName"
                            label={'Անուն'}
                            labelClasses={classes.label}
                            className={classes.input}
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            touched={formik.touched.firstName}
                            error={formik.errors.firstName}
                        />
                        <Input
                            name="lastName"
                            type="lastName"
                            label={'Ազգանուն'}
                            labelClasses={classes.label}
                            className={classes.input}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            touched={formik.touched.lastName}
                            error={formik.errors.lastName}
                        />
                        <Input
                            name="email"
                            type="text"
                            label={'Էլ․ հասցէ'}
                            labelClasses={classes.label}
                            className={classes.input}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            touched={formik.touched.email}
                            error={formik.errors.email}
                        />
                        <div className={classes.checkContainer}>
                            <div className={classes.checkbox} onClick={() => setCheck(!check)}>
                                {check && <span className={classes.check}></span>}
                            </div>
                            <label className={classes.checkLabel}>Փոխել Գաղտնաբառը</label>
                        </div>
                        <Input
                            name="currentPassword"
                            type="currentPassword"
                            label={'Ընթացիկ Գաղտնաբառը'}
                            labelClasses={classes.label}
                            className={classes.input}
                            onChange={formik.handleChange}
                            value={formik.values.currentPassword}
                            touched={formik.touched.currentPassword}
                            error={formik.errors.currentPassword}
                        />
                        <Input
                            name="newPassword"
                            type="password"
                            label={'Նոր Գաղտնաբառը'}
                            labelClasses={classes.label}
                            className={classes.input}
                            onChange={formik.handleChange}
                            value={formik.values.newPassword}
                            touched={formik.touched.newPassword}
                            error={formik.errors.newPassword}
                        />
                        <Input
                            name="confirmPassword"
                            type="password"
                            label={'Հաստատել Նոր Գաղտնաբառը'}
                            labelClasses={classes.label}
                            className={classes.input}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            touched={formik.touched.confirmPassword}
                            error={formik.errors.confirmPassword}
                        />
                        <Button classes={{button: classes.button}}>ՀԻՇԵԼ</Button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PersonalInformation;