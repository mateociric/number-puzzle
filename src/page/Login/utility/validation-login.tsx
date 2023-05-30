import * as Yup from 'yup';
import TFormikValues from 'page/model/formik-values';

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
            fetch('http://localhost:3000/users')
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
                                    //wrong password
                                } else {
                                    modalParamsHook({
                                        title: 'LOGIN ERROR',
                                        message: 'Your password is incorrect.',
                                        navLinkPath: '/PasswordRecovery',
                                        navLinkText: 'forgot password?',
                                        userName: data[i].userName,
                                        truePassword: data[i].password,
                                    });
                                    break;
                                }
                            }
                            //unsuccessful login
                            modalParamsHook({
                                title: 'LOGIN ERROR',
                                message: 'User don\'t exists.',
                                navLinkPath: '/Register',
                                navLinkText: 'don\'t have account?'
                            });
                        }
                        //no users in db.json
                    } else {
                        modalParamsHook({
                            title: 'LOGIN ERROR',
                            message: 'User don\'t exists.',
                            navLinkPath: '/Register',
                            navLinkText: 'don\'t have account?'
                        });
                    }
                })
                .catch(error => {
                    console.log('something went wrong !')
                })
            formikLogin.resetForm({ values: '' });
        }
    });

    return formikLogin;
}

export default validationLogin;