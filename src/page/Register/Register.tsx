import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import 'page/Register/Register.scss'
import Modal from 'component/Modal/Modal';
import validationRegister from './utility/validation-register';
import { initial } from 'page/utility/modal-params';

function Register() {

    const [modalParams, setModalParams] = useState(initial);

    const formik = validationRegister(useFormik, setModalParams);
    const userNameWarningBorder = formik.touched.userName && formik.errors.userName ? 'warning' : '';
    const passwordWarningBorder = formik.touched.password && formik.errors.password ? 'warning' : '';

    function displayModal() {
        setModalParams(initial);
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

                <button type='submit'>REGISTER</button>
                <NavLink to='/'>back to login</NavLink>
            </form>
        </>
    )

}

export default Register;