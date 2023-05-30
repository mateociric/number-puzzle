import * as Yup from 'yup';
import TFormikValues from 'page/model/formik-values';
import { loginError, fetchError } from 'page/utility/modal-params';
import TModalParams from 'page/model/modal-params';

const loginErrorPassword: TModalParams = {
    title: 'LOGIN ERROR',
    message: 'Your password is incorrect.',
    navLinkPath: '/PasswordRecovery',
    navLinkText: 'forgot password?',
    userName: '',
    truePassword: '',
}

function validationLogin(formikHook: Function, modalParamsHook: Function, navigateHook: Function) {
    const formikLogin = formikHook({
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
                    //db.json contains more then 0
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            //userName is correct
                            if (data[i].userName.toLowerCase() === values.userName.toLowerCase()) {
                                //successful login
                                if (data[i].password === values.password) {
                                    navigateHook('/Game');
                                    break;
                                    //username is correct but password is wrong
                                } else {
                                    modalParamsHook(() => ({ ...loginErrorPassword, userName: data[i].userName, truePassword: data[i].password }));
                                    break;
                                }
                            }
                            //unsuccessful login
                            modalParamsHook(() => loginError);
                        }
                        //no users in db.json
                    } else {
                        modalParamsHook(() => loginError);
                    }
                })
                .catch(() => {
                    modalParamsHook(() => fetchError);
                })
            formikLogin.resetForm({ values: '' });
        }
    });

    return formikLogin;
}

export default validationLogin;