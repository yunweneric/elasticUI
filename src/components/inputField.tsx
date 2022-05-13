import React, { useState, FC, ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { InputEnum, InputEnumEmail } from "../interfaces/enums";
import { validateEmail, validatePassword } from "../utils/helpers";
import { InputStyle } from "./styles/inputStyles";
interface InputProps {
  label: string;
  title: string;
  icon: string;
  suffixIcon?: string;
  func: Function;
  page?: string;
}

const InputField: FC<InputProps> = ({
  label,
  title,
  icon,
  suffixIcon,
  func,
  page,
}: InputProps) => {
  const [isValid, setIsValid] = useState<InputEnum>(InputEnum.empty);
  const [isValidEmail, setIsValidEmail] = useState<InputEnumEmail>(
    InputEnumEmail.emailEmpty
  );
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    updatePasswordUI("");
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
      console.log({ email0: email });

      if (page !== "forgot") updatePasswordUI(e.target.value);
      if (page === "forgot") {
        setIsValidEmail(validateEmail(e.target.value));
        func(isValidEmail);
      }
    } else {
      setPassword(e.target.value);
      if (page !== "login") updatePasswordUI(e.target.value);
      if (page === "signUp") {
        console.log({ emails1: email });

        // setIsValidEmail(validateEmail(email));
        // func(isValidEmail);
      }
    }
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    setIsValid(InputEnum.valid);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
      email?.length === 0
        ? setIsValidEmail(InputEnumEmail.emailEmpty)
        : setIsValidEmail(validateEmail(email));
    } else {
      setPassword(e.target.value);
      if (password?.length === 0) {
        setIsValid(InputEnum.empty);
      } else {
        updatePasswordUI("");
      }
    }
  };

  const updatePasswordUI = (event: string) => {};

  const handleOnClick = (e: React.MouseEvent) => {
    isPasswordHidden === false
      ? setIsPasswordHidden(true)
      : setIsPasswordHidden(false);
  };
  return (
    <InputStyle page={page}>
      {label === "email" ? (
        <label
          style={{
            color:
              isValidEmail === InputEnumEmail.emailEmpty
                ? "white"
                : isValidEmail === InputEnumEmail.emailValid
                ? "#36A4EF"
                : "red",
          }}
          htmlFor={label}
        >
          {title}
        </label>
      ) : (
        <label
          style={{
            color:
              isValid === InputEnum.empty
                ? "white"
                : isValid === InputEnum.valid
                ? "#36A4EF"
                : "red",
          }}
          htmlFor={label}
        >
          {title}
        </label>
      )}
      <input
        type={isPasswordHidden === true ? label : "text"}
        name={label}
        placeholder=""
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <img className="prefixIcon" src={icon} alt="" />
      {suffixIcon ? (
        <img
          className="suffixIcon"
          src={suffixIcon}
          alt=""
          onClick={handleOnClick}
        />
      ) : (
        ""
      )}
      {isValidEmail === InputEnumEmail.emailInValid ? (
        <span style={{ color: "red", fontSize: "10px" }}>
          Please enter a valid {title}
        </span>
      ) : (
        ""
      )}
      {isValid === InputEnum.passwordInvalid ? (
        <span style={{ color: "red", fontSize: "10px" }}>
          Minimum password requirements not met
        </span>
      ) : (
        ""
      )}
    </InputStyle>
  );
};

export default InputField;
