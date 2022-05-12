import React, { FC } from "react";
import HeaderLogo from "../components/HeaderLogo";
import LoginCard from "../components/LoginCard";

const Login: FC = () => {
  return (
    <div>
      <HeaderLogo page="login" />
      <LoginCard />
    </div>
  );
};

export default Login;
