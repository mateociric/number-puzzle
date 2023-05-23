//sending email via emailjs.com
import emailjs from 'emailjs-com';

function sendEmail(emailInputValue: string, locationUserName: string, locationTruePassword: string, setModalParamsHook: Function) {
    const userDataRecovery = {
        email: emailInputValue,
        userName: locationUserName,
        password: locationTruePassword,
    };
    emailjs.send('default_service', 'template_q07gxe9', userDataRecovery, 'TZ6ZvWvyMUYxZIQ9I')
        .then((result) => {
            setModalParamsHook({
                title: 'PASSWORD RECOVERY',
                message: 'Password sent to your email.',
                navLinkPath: '/',
                navLinkText: '',
            })
        }, (error) => {
            setModalParamsHook({
                title: 'PASSWORD RECOVERY',
                message: 'Password recovery failed.',
                navLinkPath: '/',
                navLinkText: '',
            })
        });
}

export default sendEmail;