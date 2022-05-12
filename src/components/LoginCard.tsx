import { CardContainer } from "./styles/CardContainer";
import InputField from "./styles/inputFieldStyle";
import SubmitButton from "./SubmitButton";
import SocialButtons from "./SocialButtons";
const LoginCard = () => {
  const pull_data = (data: string) => {};
  return (
    <CardContainer>
      <h2>Log In</h2>
      <form action="">
        <InputField
          func={pull_data}
          label="email"
          title="Email"
          icon="/assets/svgs/userIcon.svg"
        />
        <InputField
          func={pull_data}
          label="password"
          title="Password"
          icon="/assets/svgs/passwordIcon.svg"
          suffixIcon="/assets/svgs/eyeIcon.svg"
        />

        <SubmitButton title="Log in" status={true} />
        <h4>Forgot Password?</h4>
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
