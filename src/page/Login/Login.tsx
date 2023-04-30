import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import 'page/Login/Login.scss';
import Modal from 'component/Modal/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import checkLogin from 'page/Login/utility/check-login';

function Login() {
    const navigate = useNavigate();
    // '' means that modal will not be shown
    const [messageForModal, setMessageForModal] = useState<string>('');
    // if password is wrong, true password will be sent by email
    const [truePassword, setTruePassword] = useState<number>(0);
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
                    checkLogin(data, values, navigate, setMessageForModal, setTruePassword);
                })
        }
    });
    const userNameWarningBorder = formik.touched.userName && formik.errors.userName ? 'warning' : '';
    const passwordWarningBorder = formik.touched.password && formik.errors.password ? 'warning' : '';

    function clearModal() {
        setMessageForModal(() => '');
    }

    return (
        <>
            {messageForModal && <Modal onClick={clearModal} msg={messageForModal} />}
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

                <button type='submit'>LOGIN</button>
                <NavLink to='Register'>don't have account?</NavLink>
            </form>
        </>
    )
}

export default Login;