import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import 'page/PasswordRecovery/PasswordRecovery.scss';
import Modal from 'component/Modal/Modal';
import sendEmail from 'page/PasswordRecovery/utility/send-email';
import validationPasswordRecovery from './utility/validation-passwordrecovery';
import modalParamsInitial from 'page/utility/modal-params-initial';

function PasswordRecovery() {
    const [modalParams, setModalParams] = useState(modalParamsInitial);
    const location = useLocation();
    const formik = validationPasswordRecovery(useFormik, (event: any) => sendEmail(formik.values.email, location.state.userName, location.state.truePassword, setModalParams))

    const emailWarningBorder = formik.touched.email && formik.errors.email ? 'warning' : '';

    function displayModal() {
        setModalParams(modalParamsInitial);
    }

    return (
        <>
            {modalParams.title !== '' && <Modal onClick={displayModal} modalParams={modalParams} />}
            <form onSubmit={formik.handleSubmit} className='passwordrecovery-form fixed-center flex-column-center'>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type="text"
                    id='email'
                    placeholder='enter your email address'
                    className={emailWarningBorder}
                />
                <button type='submit'>REST PASSWORD</button>
                <NavLink to='/'>back to login</NavLink>

            </form>
        </>
    )
}

export default PasswordRecovery;