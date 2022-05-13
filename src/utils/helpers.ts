import { InputEnum, InputEnumEmail, PasswordStates } from "../interfaces/enums";


export const validateEmail = (email: string, tracker?: boolean): InputEnumEmail => {
    let mail = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (tracker) {
        return mail === null ? InputEnumEmail.signUpEmail : InputEnumEmail.emailValid;

    }
    return mail === null ? InputEnumEmail.emailInValid : InputEnumEmail.emailValid;
};

export const validatePassword = (password: string): PasswordStates => {
    if (password.length >= 15) {
        return PasswordStates.passwordValid;
    }
    if (password.length === 0) {
        return PasswordStates.passwordClean;
    }
    if (password.length < 8) {
        return PasswordStates.passwordInvalid;
    }
    if (password.length >= 8) {
        if (password.length >= 8 && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null) {
            return PasswordStates.passwordValid;
        }
        return PasswordStates.passwordValidLength;
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null) {
        return PasswordStates.specialCharValid;
    }

    return PasswordStates.passwordInvalid;
}