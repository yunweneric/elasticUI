import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./styles/CardContainer";
import SubmitButton from "./SubmitButton";
import ForgotPasswordEmailField from "./ForgotPasswordEmailField";
import { InputEnumEmail } from "../interfaces/enums";

const ForgotPasswordCard: FC = () => {
  const [emailValid, setEmailValid] = useState<InputEnumEmail>(
    InputEnumEmail.emailEmpty
  );
  const pull_data = (data: string) => {
    if (data === InputEnumEmail.emailValid) {
      setEmailValid(InputEnumEmail.emailValid);
    }
    if (data === InputEnumEmail.signUpEmail) {
      setEmailValid(InputEnumEmail.signUpEmail);
    }
    if (data === InputEnumEmail.emailEmpty) {
      setEmailValid(InputEnumEmail.emailEmpty);
    }
  };
  return (
    <div>
      <CardContainer>
        <div className="lockSVG">
          <img src="/assets/svgs/resetPassword.svg" alt="" />
        </div>
        <h2>Reset your password</h2>
        <h3>
          Tell us the email for your account and we'll send a password reset
          link.
        </h3>
        <form action="">
          <ForgotPasswordEmailField page="forgot" func={pull_data} />
          <SubmitButton
            title="Reset password"
            status={emailValid === InputEnumEmail.emailEmpty ? true : false}
          />
          <div className="forgot">
            <Link to="/">Back to log in</Link>
          </div>
          <div
            className={
              emailValid === InputEnumEmail.emailInValid ||
              emailValid === InputEnumEmail.signUpEmail
                ? "validation"
                : "d-none"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f98982"
              strokeWidth={2}
              height="20"
              width={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Invalid email address</span>
          </div>
        </form>
      </CardContainer>
    </div>
  );
};

export default ForgotPasswordCard;
