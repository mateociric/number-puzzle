import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'page/Login/Login.scss';
import Modal from 'component/Modal/Modal';
import Game from 'page/Game/Game';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignIn() {
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
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
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].userName.toLowerCase() === values.userName.toLowerCase()) {
                            if (data[i].password === values.password) {
                                console.log('you are logged');
                                navigate('/Game');
                                break;
                            } else {
                                setMessage(() => 'wrong password')
                                break;
                            }
                        }
                        setMessage(() => 'user don\'t exists');
                    }
                })
        }
    });
    const userNameWarning = formik.touched.userName && formik.errors.userName ? 'warning' : '';
    const passwordWarning = formik.touched.password && formik.errors.password ? 'warning' : '';

    function clearModal() {
        setMessage(() => '');
    }

    return (
        <>
            {message && <Modal onClick={clearModal} msg={message} />}
            <form onSubmit={formik.handleSubmit} className='login-form fixed-center'>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                    type="text"
                    id='userName'
                    placeholder='username'
                    className={userNameWarning}
                />
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type="text"
                    id='password'
                    placeholder='password'
                    className={passwordWarning}
                />

                <button type='submit'>SIGN IN</button>
                <p>don't have account?</p>
            </form>
        </>
    )
}

export default SignIn;