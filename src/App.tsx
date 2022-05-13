import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

const theme = {
  colors: {
    body: "#282C34",
  },
};
const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
