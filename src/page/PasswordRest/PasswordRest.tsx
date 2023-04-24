import React from 'react'
import { NavLink } from 'react-router-dom';
import 'page/PasswordRest/PasswordRest.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'

function PasswordRest() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
        }),
        onSubmit: (values, event) => {
            sendEmail(event);
        }
    })
    const emailWarningBorder = formik.touched.email && formik.errors.email ? 'warning' : '';

    function sendEmail(event: any) {
        event.preventDefault();

        emailjs.sendForm('default_service', 'template_q07gxe9', event.target, 'TZ6ZvWvyMUYxZIQ9I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

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