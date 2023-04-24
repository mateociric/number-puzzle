import React from 'react'
import { NavLink } from 'react-router-dom';
import 'page/PasswordRest/PasswordRest.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function PasswordRest() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
        }),
        onSubmit: (values) => {

        }
    })
    const emailWarningBorder = formik.touched.email && formik.errors.email ? 'warning' : '';

    return (
        <form onSubmit={formik.handleSubmit} className='passwordrest-form fixed-center flex-column-center'>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="text"
                id='email'
                placeholder='enter your email address'
                className={emailWarningBorder}
            />
            <button>REST PASSWORD</button>
            <NavLink to='/'>back to login</NavLink>
            
        </form>
    )
}

export default PasswordRest;