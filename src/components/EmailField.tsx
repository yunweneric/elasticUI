import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { BtnStates, InputEnumEmail, TextStates } from "../interfaces/enums";
import { validateEmail } from "../utils/helpers";
import { InputStyle } from "./styles/inputStyles";

interface EmailInterface {
  page?: string;
  func: Function;
}

const EmailField = ({ page, func }: EmailInterface) => {
  const [trackText, setTractText] = useState<TextStates>(TextStates.textClean);
  const [trackBtn, setTrackBtn] = useState<BtnStates>(BtnStates.btnDisabled);
  const [isValidEmail, setIsValidEmail] = useState<InputEnumEmail>(
    InputEnumEmail.emailEmpty
  );
  useEffect(() => {
    func(isValidEmail);
  }, [isValidEmail]);
  const [email, setEmail] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));

    if (isValidEmail == InputEnumEmail.emailValid) {
      setTractText(TextStates.textValid);
      setTrackBtn(BtnStates.btnEnabled);
      func(isValidEmail);
    } else if (isValidEmail == InputEnumEmail.emailInValid) {
      setTractText(TextStates.textInvalid);
      setTrackBtn(BtnStates.btnDisabled);
      func(isValidEmail);
    } else {
      setTractText(TextStates.textClean);
      setTrackBtn(BtnStates.btnDisabled);
      func(isValidEmail);
    }

    if (page === "forgot") {
      setIsValidEmail(validateEmail(e.target.value));
      func(isValidEmail);
    }
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    setIsValidEmail(InputEnumEmail.emailValid);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    email?.length === 0
      ? setIsValidEmail(InputEnumEmail.emailEmpty)
      : setIsValidEmail(validateEmail(email, true));
  };

  return (
    <div>
      <InputStyle page={page}>
        <label
          style={{
            color:
              trackText === TextStates.textClean
                ? "white"
                : isValidEmail !== InputEnumEmail.signUpEmail || page == "login"
                ? "#36A4EF"
                : "red",
          }}
          htmlFor="email"
        >
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder=""
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <img className="prefixIcon" src="/assets/svgs/userIcon.svg" alt="" />
        {page === "login" ? (
          <></>
        ) : isValidEmail === InputEnumEmail.signUpEmail ? (
          <span style={{ color: "red", fontSize: "10px" }}>
            Please enter a valid Email
          </span>
        ) : (
          <></>
        )}
      </InputStyle>
    </div>
  );
};

export default EmailField;
