import React, { FC } from "react";
import HeaderLogo from "../components/HeaderLogo";
import SignUpCard from "../components/SignupCard";

const SignUp: FC = () => {
  return (
    <div>
      <HeaderLogo page="signUp" />
      <SignUpCard />
    </div>
  );
};

export default SignUp;
