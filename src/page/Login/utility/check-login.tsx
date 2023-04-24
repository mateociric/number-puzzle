import TFormikValues from "../model/formik-values";

function checkLogin(data: Array<TFormikValues>, values: TFormikValues, navigateHook: Function, messageHook: Function) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].userName.toLowerCase() === values.userName.toLowerCase()) {
            if (data[i].password === values.password) {
                console.log('you are logged');
                navigateHook('/Game');
                break;
            } else {
                messageHook(() => 'wrong password')
                break;
            }
        }
        messageHook(() => 'user don\'t exists');
    }
}

export default checkLogin;