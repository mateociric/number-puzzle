import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import 'page/Login/Login.scss';
import Modal from 'component/Modal/Modal';
import validationLogin from 'page/Login/utility/validation-login';
import modalParamsInitial from 'page/utility/modal-params-initial';

function Login() {
    const [modalParams, setModalParams] = useState(modalParamsInitial);
    const navigate = useNavigate();

    const formik = validationLogin(useFormik, setModalParams, navigate);
    const userNameWarningBorder = formik.touched.userName && formik.errors.userName ? 'warning' : '';
    const passwordWarningBorder = formik.touched.password && formik.errors.password ? 'warning' : '';

    function displayModal() {
        setModalParams(modalParamsInitial);
    }

    return (
        <>
            {modalParams.title !== '' && <Modal onClick={displayModal} modalParams={modalParams} />}
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