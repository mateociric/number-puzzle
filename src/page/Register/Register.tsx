import React from 'react'
import 'page/Register/Register.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import checkRegister from './utility/check-register';

function Register() {
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .min(2, 'min is 2 chr')
                .max(15, 'max is 15 chr')
                .required('Please fill username'),
            password: Yup.string()
                .min(5, 'min is 5 chr')
                .max(15, 'max is 15 chr')
                .required('Please fill password'),
        }),
        onSubmit: (values: any) => {
            fetch('http://localhost:4000/users')
                .then(response => response.json())
                .then(data => {
                    const isUserRegistered = checkRegister(data, values);
                    console.log(isUserRegistered);
                })
        }
    });
    const userNameWarningBorder = formik.touched.userName && formik.errors.userName ? 'warning' : '';
    const passwordWarningBorder = formik.touched.password && formik.errors.password ? 'warning' : '';
    return (
        <form onSubmit={formik.handleSubmit} className='login-form fixed-center flex-column-center'>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                type="text"
                id='userName'
                placeholder='username'
                className={userNameWarningBorder}
            />
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type="text"
                id='password'
                placeholder='password'
                className={passwordWarningBorder}
            />

            <button type='submit'>REGISTER</button>
        </form>
    )
}

export default Register;