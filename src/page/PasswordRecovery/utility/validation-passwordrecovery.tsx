import * as Yup from 'yup';

function validationPasswordRecovery(formikHook: Function, sendEmail: Function) {
    const formikPasswordRecovery = formikHook({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
        }),
        onSubmit: (values: any, event: any) => {
            sendEmail(event)
        }
    })

    return formikPasswordRecovery;
}

export default validationPasswordRecovery;