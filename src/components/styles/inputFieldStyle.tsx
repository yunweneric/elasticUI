import { useState, FC, ChangeEvent } from "react";
import styled from "styled-components";
import { InputEnum } from "../../interfaces/enums";
import { validateEmail, validatePassword } from "../../utils/helpers";
interface InputProps {
  label: string;
  title: string;
  icon: string;
  suffixIcon?: string;
  func: Function;
}
const InputField: FC<InputProps> = ({
  label,
  title,
  icon,
  suffixIcon,
  func,
}: InputProps) => {
  const [isValid, setIsValid] = useState<InputEnum>(InputEnum.empty);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.type === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
    updatePasswordUI(validatePassword(e.target.value));
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    setIsValid(InputEnum.valid);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
      email?.length === 0
        ? setIsValid(InputEnum.empty)
        : setIsValid(validateEmail(email));
    } else {
      setPassword(e.target.value);
      if (password?.length === 0) {
        setIsValid(InputEnum.empty);
      } else {
        updatePasswordUI(validatePassword(e.target.value));
      }
    }
  };

  const updatePasswordUI = (event: string) => {
    switch (validatePassword(event)) {
      case InputEnum.valid:
        setIsValid(InputEnum.valid);
        func(InputEnum.valid);
        break;

      case InputEnum.lengthValid:
        setIsValid(InputEnum.lengthValid);
        func(InputEnum.lengthValid);
        break;

      case InputEnum.specialCharValid:
        setIsValid(InputEnum.specialCharValid);
        func(InputEnum.specialCharValid);
        break;

      case InputEnum.bothValid:
        setIsValid(InputEnum.bothValid);
        func(InputEnum.bothValid);
        break;
      case InputEnum.inValid:
        setIsValid(InputEnum.inValid);
        func(InputEnum.inValid);
        break;
      default:
        break;
    }
  };

  return (
    <InputStyle>
      <label
        style={{
          color:
            isValid === InputEnum.empty
              ? "white"
              : isValid === InputEnum.valid
              ? "#36A4EF"
              : "red",
        }}
        htmlFor={label}
      >
        {title}
      </label>
      <input
        type={label}
        name={label}
        placeholder=""
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <img className="prefixIcon" src={icon} alt="" />
      {suffixIcon ? <img className="suffixIcon" src={suffixIcon} alt="" /> : ""}
      {isValid === InputEnum.inValid ? (
        <span style={{ color: "red", fontSize: "10px" }}>
          Please enter a valid {title}
        </span>
      ) : (
        ""
      )}
      {isValid === InputEnum.passwordInvalid ? (
        <span style={{ color: "red", fontSize: "10px" }}>
          Minimum password requirements not met
        </span>
      ) : (
        ""
      )}
    </InputStyle>
  );
};

export default InputField;
const InputStyle = styled.fieldset`
  border: none;
  position: relative;
  margin: 0 0 30px 0;

  .prefixIcon {
    position: absolute;
    left: 10px;
    top: 38px;
  }
  .suffixIcon {
    position: absolute;
    right: 1px;
    top: 28px;
    padding: 11px;
    background-color: #1f2126;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
  }
  input {
    /* max-width: 400px; */
    width: 100%;
    height: 40px;
    background-color: #16171c;
    background-repeat: no-repeat;
    background-size: 0 100%;
    box-shadow: 0 0 transparent, inset 0 0 0 1px hsl(0deg 0% 100% / 10%);
    transition: box-shadow 0.15s ease-in, background-image 0.15s ease-in;
    font-weight: 400;
    letter-spacing: normal;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-kerning: normal;
    font-kerning: normal;
    font-size: 14px;
    color: #dfe5ef;
    border: none;
    border-radius: 6px;
    padding: 12px 40px;
    margin-top: 8px;
  }

  label {
    font-size: 12px;
  }
  label:focus {
    color: #36a2ef;
  }

  input:focus {
    background-color: #111216;
    background-image: linear-gradient(
      0deg,
      #36a2ef,
      #36a2ef 2px,
      transparent 0,
      transparent
    );
    transition: all 0.5s;
    background-size: 100% 100%;
    outline: none;
  }
`;
