import { CardContainer } from "./styles/CardContainer";
import SubmitButton from "./SubmitButton";
import SocialButtons from "./SocialButtons";
import { Link } from "react-router-dom";
import { InputEnum, InputEnumEmail, PasswordStates } from "../interfaces/enums";
import { FC, useState } from "react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

const SignUpCard: FC = () => {
  const [validPassword, setValidPassword] = useState<InputEnum | string>("");
  const [validEmail, setValidEmail] = useState<InputEnumEmail>(
    InputEnumEmail.emailEmpty
  );
  const pull_data = (data: PasswordStates | InputEnumEmail) => {
    console.log(data);
    switch (data) {
      case InputEnumEmail.emailValid:
        setValidEmail(data);
        break;
      case InputEnumEmail.emailInValid:
        setValidEmail(data);
        break;
      case PasswordStates.passwordValid:
        setValidPassword(PasswordStates.passwordValid);
        break;
      case PasswordStates.passwordInvalid:
        setValidPassword(PasswordStates.passwordInvalid);
        break;
      case PasswordStates.specialCharInValid:
        setValidPassword(PasswordStates.specialCharInValid);
        break;

      case PasswordStates.passwordValidLength:
        setValidPassword(PasswordStates.passwordValidLength);
        break;
      case PasswordStates.passwordFocused:
        setValidPassword(PasswordStates.passwordFocused);

        break;
      case PasswordStates.passwordClean:
        setValidPassword(PasswordStates.passwordClean);
        break;

      case PasswordStates.specialCharValid:
        setValidPassword(PasswordStates.specialCharValid);
        break;
    }
  };

  console.log(validEmail, validPassword);

  return (
    <CardContainer>
      <h2>Start your free Elastic Cloud trial</h2>
      <h3>No credit card required</h3>
      <form action="">
        <EmailField func={pull_data} page="signUp" />
        <div className="passwordField">
          <PasswordField func={pull_data} page="signUp" />
          {validPassword === PasswordStates.passwordClean ||
          validPassword === PasswordStates.passwordValid ? (
            <></>
          ) : (
            <div className="password-pop">
              <p>Your password must:</p>
              <div className="criteria">
                {validPassword === PasswordStates.passwordValidLength ||
                validPassword === PasswordStates.passwordValid ? (
                  <img src="/assets/svgs/checkIconValid.svg" alt="" />
                ) : (
                  <img src="/assets/svgs/checkIcon.svg" alt="" />
                )}
                <span>Be a minimum of 8 characters</span>
              </div>
              <div className="criteria">
                {validPassword === PasswordStates.specialCharInValid ? (
                  <img src="/assets/svgs/checkIconValid.svg" alt="" />
                ) : (
                  <img src="/assets/svgs/checkIcon.svg" alt="" />
                )}
                <span>
                  Include a combination of letters, numbers and symbols
                </span>
              </div>
              <h2>OR</h2>
              <div className="criteria">
                <img src="/assets/svgs/checkIcon.svg" alt="" />
                <span>Be a minimum of 15 characters without complexity</span>
              </div>
              <hr />
              <p>
                Avoid commonly used and easily guessed passwords like "password1
              </p>
            </div>
          )}
        </div>

        <SubmitButton
          title="Start free trial"
          status={
            validEmail === InputEnumEmail.emailValid &&
            validPassword === PasswordStates.passwordValid
              ? false
              : true
          }
        />
        <div className="social-alt">
          <div></div>
          <span>Or sign up with</span>
          <div></div>
        </div>
        <SocialButtons />
        <p>
          By signing up, you acknowledge that you've read and agree to our
          <span>
            <Link to="#"> Terms of Service </Link>
          </span>
          and
          <span>
            <Link to="#"> Privacy Statement</Link>
          </span>
          .
        </p>
      </form>
    </CardContainer>
  );
};
export default SignUpCard;
