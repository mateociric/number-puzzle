import * as Yup from 'yup';
import TFormikValues from "page/model/formik-values";
import { fetchError } from 'page/utility/modal-params';
import TModalParams from 'page/model/modal-params';

const registerError: TModalParams = {
    title: 'REGISTER ERROR',
    message: 'This username is already exists.',
    navLinkPath: '',
    navLinkText: '',
}

const registerSuccessful: TModalParams = {
    title: 'REGISTER SUCCESSFUL',
    message: 'You are registered.',
    navLinkPath: '/Login',
    navLinkText: 'back to login page',
}

function validationRegister(formikHook: Function, modalParamsHook: Function) {
    const formikRegister = formikHook({
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
        onSubmit: (values: TFormikValues) => {
            fetch('http://localhost:4000/users')
                .then(response => response.json())
                .then((data: Array<TFormikValues>) => {
                    const userNameAlreadyExists: boolean = data.some(el => {
                        return el.userName.toLocaleLowerCase() === values.userName.toLocaleLowerCase();
                    });
                    if (!userNameAlreadyExists) {
                        const newUser = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ userName: formikRegister.values.userName, password: formikRegister.values.password })
                        }
                        fetch('http://localhost:4000/users', newUser)
                        modalParamsHook(() => registerSuccessful);
                    } else {
                        modalParamsHook(() => registerError)
                    }
                })
                .catch(() => {
                    modalParamsHook(() => fetchError);
                })
            formikRegister.resetForm({ values: '' });
        }
    });

    return formikRegister;
}

export default validationRegister;