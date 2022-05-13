import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./styles/CardContainer";
import InputField from "./inputField";
import SubmitButton from "./SubmitButton";

const ForgotPasswordCard: FC = () => {
  const pull_data = (data: string) => {
    console.log(data);
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
          <InputField
            func={pull_data}
            label="email"
            title="Email"
            icon=""
            page="forgot"
          />
          <SubmitButton title="Reset password" status={false} />
          <div className="forgot">
            <Link to="/">Back to log in</Link>
          </div>
          <div className="validation">
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
