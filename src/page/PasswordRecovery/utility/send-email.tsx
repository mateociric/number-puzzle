//sending email via emailjs.com
import emailjs from 'emailjs-com';
import TModalParams from 'page/model/modal-params';
import { fetchError } from 'page/utility/modal-params';

const passwordRecoverySuccessful: TModalParams = {
    title: 'PASSWORD RECOVERY',
    message: 'Password sent to your email.',
    navLinkPath: '/',
    navLinkText: '',
}

function sendEmail(emailInputValue: string, locationUserName: string, locationTruePassword: string, modalParamsHook: Function) {
    const userDataRecovery = {
        email: emailInputValue,
        userName: locationUserName,
        password: locationTruePassword,
    };
    emailjs.send('default_service', 'template_q07gxe9', userDataRecovery, 'TZ6ZvWvyMUYxZIQ9I')
        .then((result) => {
            modalParamsHook(() => passwordRecoverySuccessful)
        }, (error) => {
            modalParamsHook(() => fetchError);
        });
}

export default sendEmail;