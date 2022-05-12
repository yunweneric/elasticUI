import { HeaderStyles } from "./styles/HeaderLogoStyles";
import { Link } from "react-router-dom";

interface HeaderProps {
  page: string;
}
const HeaderLogo = ({ page }: HeaderProps) => {
  const renderAction = () => {
    switch (page) {
      case "login":
        return (
          <div>
            <p>
              Don't have an account?
              <Link to="signUp">
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        );
      case "signUp":
        return (
          <div>
            <p>
              Already have an account
              <Link to="/">
                <span>Log in</span>
              </Link>
            </p>
          </div>
        );

      default:
        break;
    }
  };
  return (
    <HeaderStyles>
      <div></div>
      <div>
        <img src="/assets/images/elas.svg" alt="" />
      </div>
      <>{renderAction()}</>
    </HeaderStyles>
  );
};

export default HeaderLogo;
