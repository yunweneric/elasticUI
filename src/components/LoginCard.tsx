import { CardContainer } from "./styles/CardContainer";
import SubmitButton from "./SubmitButton";
import SocialButtons from "./SocialButtons";
import { Link } from "react-router-dom";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import { FC, useState } from "react";
import { BtnStates, InputEnumEmail, PasswordStates } from "../interfaces/enums";
const LoginCard: FC = () => {
  const [btnStatus, setBtnStatus] = useState<BtnStates>(BtnStates.btnDisabled);
  const [emailStatus, setEmailStatus] = useState<InputEnumEmail>(
    InputEnumEmail.emailEmpty
  );

  const pull_data = (data: string) => {
    if (data === BtnStates.btnEnabled) {
      setBtnStatus(BtnStates.btnEnabled);
    }
    if (data === InputEnumEmail.emailValid) {
      setEmailStatus(InputEnumEmail.emailValid);
    } else if (data === InputEnumEmail.emailInValid) {
      setEmailStatus(InputEnumEmail.emailInValid);
    }
    console.log(emailStatus, btnStatus);
  };
  return (
    <CardContainer>
      <h2>Log In</h2>
      <form action="">
        <EmailField func={pull_data} page="login" />
        <PasswordField func={pull_data} page="login" />
        <SubmitButton
          title="Log in"
          status={
            btnStatus === BtnStates.btnEnabled &&
            emailStatus === InputEnumEmail.emailValid
              ? false
              : true
          }
        />
        <div className="forgot">
          <Link to="forgot">Forgot Password?</Link>
        </div>
        <div className="social-alt">
          <div></div>
          <span>Or log in with</span>
          <div></div>
        </div>
        <SocialButtons />
      </form>
    </CardContainer>
  );
};
export default LoginCard;
