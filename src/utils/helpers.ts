import { InputEnum } from "../interfaces/enums";


export const validateEmail = (email: string): InputEnum => {
    let mail = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    return mail === null ? InputEnum.inValid : InputEnum.valid;
};

export const validatePassword = (password: string): InputEnum => {
    if (password.length === 0) {
        return InputEnum.empty;
    }
    if (password.length < 8) {
        return InputEnum.inValid;
    }
    if (password.length >= 8) {
        return InputEnum.lengthValid;

    } if (password.length >= 8 || password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        return InputEnum.bothValid;

    } if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        return InputEnum.specialCharValid;
    }
    if (password.length > 15) {
        return InputEnum.bothValid;
    }
    return InputEnum.inValid
}