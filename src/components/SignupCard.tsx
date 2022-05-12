import { CardContainer } from "./styles/CardContainer";
import InputField from "./styles/inputFieldStyle";
import SubmitButton from "./SubmitButton";
import SocialButtons from "./SocialButtons";
import { Link } from "react-router-dom";
import { InputEnum } from "../interfaces/enums";
import { useState } from "react";
const SignUpCard = () => {
  const [validPassword, setValidPassword] = useState<string>("");
  const pull_data = (data: InputEnum) => {
    console.log(validPassword);
    switch (data) {
      case InputEnum.valid:
        setValidPassword(InputEnum.valid);
        break;
      case InputEnum.inValid:
        setValidPassword(InputEnum.inValid);
        break;
      case InputEnum.lengthValid:
        setValidPassword(InputEnum.lengthValid);
        break;
      case InputEnum.empty:
        setValidPassword(InputEnum.empty);
        break;
      case InputEnum.bothValid:
        setValidPassword(InputEnum.bothValid);
        break;
      case InputEnum.specialCharValid:
        setValidPassword(InputEnum.specialCharValid);
        break;
      default:
        break;
    }
  };

  return (
    <CardContainer>
      <h2>Start your free Elastic Cloud trial</h2>
      <h3>No credit card required</h3>
      <form action="">
        <InputField
          label="email"
          title="Email"
          icon="/assets/svgs/userIcon.svg"
          func={pull_data}
        />
        <div className="passwordField">
          <InputField
            func={pull_data}
            label="password"
            title="Password"
            icon="/assets/svgs/passwordIcon.svg"
            suffixIcon="/assets/svgs/eyeIcon.svg"
          />
          <div className="password-pop">
            <p>Your password must:</p>
            <div className="criteria">
              {validPassword === InputEnum.lengthValid ||
              validPassword === InputEnum.bothValid ? (
                <img src="/assets/svgs/checkIconValid.svg" alt="" />
              ) : (
                <img src="/assets/svgs/checkIcon.svg" alt="" />
              )}
              <span>Be a minimum of 8 characters</span>
            </div>
            <div className="criteria">
              {validPassword === InputEnum.specialCharValid ||
              validPassword === InputEnum.bothValid ? (
                <img src="/assets/svgs/checkIconValid.svg" alt="" />
              ) : (
                <img src="/assets/svgs/checkIcon.svg" alt="" />
              )}
              <span>Include a combination of letters, numbers and symbols</span>
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
        </div>

        <SubmitButton title="Log in" status={true} />
        <div className="social-alt">
          <div></div>
          <span>Or log in with</span>
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
