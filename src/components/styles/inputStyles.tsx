import styled from "styled-components";

interface InputStyleProps {
  page?: string;
}
export const InputStyle = styled.fieldset<InputStyleProps>`
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
    padding: ${(props) =>
      props.page === "forgot" ? "12px 10px" : "12px 40px"};
    margin-top: 8px;
  }
  input[type="password"] {
    border-right: 40px solid #1f2126;
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
