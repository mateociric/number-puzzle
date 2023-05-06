import TFormikValues from "page/model/formik-values";

function checkRegister(data: Array<TFormikValues>, values: TFormikValues) {
    return data.some(el => {
        return el.userName.toLocaleLowerCase() === values.userName.toLocaleLowerCase();
    })
}

export default checkRegister;