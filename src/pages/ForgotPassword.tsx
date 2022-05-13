import React, { FC } from "react";
import ForgotPasswordCard from "../components/ForgotPasswordCard";
import HeaderLogo from "../components/HeaderLogo";

const ForgotPassword: FC = () => {
  return (
    <div>
      <HeaderLogo page="forgot" />
      <ForgotPasswordCard />
    </div>
  );
};

export default ForgotPassword;
