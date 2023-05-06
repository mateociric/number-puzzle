import TFormikValues from "../../model/formik-values";

function checkLogin(
    data: Array<TFormikValues>, 
    values: TFormikValues, 
    navigateHook: Function, 
    setMessageHook: Function, 
    setTruePasswordHook: Function) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].userName.toLowerCase() === values.userName.toLowerCase()) {
            if (data[i].password === values.password) {
                console.log('you are logged');
                navigateHook('/Game');
                break;
            } else {
                setMessageHook(() => 'wrong password');
                setTruePasswordHook(() => data[i].password)
                break;
            }
        }
        setMessageHook(() => 'user don\'t exists');
    }
}

export default checkLogin;