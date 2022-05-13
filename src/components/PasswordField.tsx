import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { BtnStates, InputEnum, PasswordStates } from "../interfaces/enums";
import { validatePassword } from "../utils/helpers";
import { InputStyle } from "./styles/inputStyles";

interface PasswordInterface {
  page?: string;
  func: Function;
}
const PasswordField: FC<PasswordInterface> = ({
  func,
  page,
}: PasswordInterface) => {
  const [isPasswordText, setIsPasswordText] = useState<PasswordStates>(
    PasswordStates.passwordClean
  );
  const [trackBtn, setTrackBtn] = useState<BtnStates>(BtnStates.btnDisabled);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    updatePasswordUI("");
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (page == "signUp") updatePasswordUI(e.target.value);
    if (page === "login") {
      if (e.target.value.length > 0) {
        setTrackBtn(BtnStates.btnEnabled);
        func(trackBtn);
        console.log({ password: e.target.value });
      }
    }
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    setIsPasswordText(PasswordStates.passwordFocused);
    func(PasswordStates.passwordFocused);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password?.length === 0) {
      setIsPasswordText(PasswordStates.passwordClean);
    } else {
      updatePasswordUI("");
      if (page === "signUp") {
        updatePasswordUI(e.target.value);
      }
    }
  };

  const updatePasswordUI = (event: string) => {
    switch (validatePassword(event)) {
      case PasswordStates.passwordValid:
        setIsPasswordText(PasswordStates.passwordValid);
        func(PasswordStates.passwordValid);
        break;

      case PasswordStates.specialCharInValid:
        setIsPasswordText(PasswordStates.specialCharInValid);
        func(PasswordStates.specialCharInValid);
        break;
      case PasswordStates.passwordClean:
        setIsPasswordText(PasswordStates.passwordClean);
        func(PasswordStates.passwordClean);
        break;

      case PasswordStates.passwordValidLength:
        setIsPasswordText(PasswordStates.passwordValidLength);
        func(PasswordStates.passwordValidLength);
        break;

      case PasswordStates.specialCharValid:
        setIsPasswordText(PasswordStates.specialCharValid);
        func(PasswordStates.specialCharValid);
        break;

      case PasswordStates.passwordInvalid:
        setIsPasswordText(PasswordStates.passwordInvalid);
        func(PasswordStates.passwordInvalid);
        break;
    }
  };

  const handleOnClick = (e: React.MouseEvent) => {
    isPasswordHidden === false
      ? setIsPasswordHidden(true)
      : setIsPasswordHidden(false);
  };
  return (
    <div>
      <InputStyle page={page}>
        <label
          style={{
            color:
              isPasswordText === PasswordStates.passwordClean
                ? "white"
                : isPasswordText === PasswordStates.passwordInvalid ||
                  page != "login"
                ? "red"
                : "#36A4EF",
          }}
          htmlFor="password"
        >
          Password
        </label>

        <input
          type={isPasswordHidden === true ? "password" : "text"}
          name="password"
          placeholder=""
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <img
          className="prefixIcon"
          src="/assets/svgs/passwordIcon.svg"
          alt=""
        />
        <img
          className="suffixIcon"
          src="/assets/svgs/eyeIcon.svg"
          alt=""
          onClick={handleOnClick}
        />
      </InputStyle>
    </div>
  );
};

export default PasswordField;
