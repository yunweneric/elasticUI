import styled from "styled-components";
export const CardContainer = styled.div`
  width: 25%;
  margin: 0 auto;
  box-shadow: 0 0.9px 4px -1px rgb(0 0 0 / 20%),
    0 2.6px 8px -1px rgb(0 0 0 / 15%), 0 5.7px 12px -1px rgb(0 0 0 / 13%),
    0 15px 15px -1px rgb(0 0 0 / 10%);
  margin-top: 40px;
  padding: 40px 25px;
  .d-none {
    display: none;
  }
  h2,
  p,
  h3,
  .forgot {
    text-align: center;
  }
  h2 {
    margin-bottom: 15px;
    font-size: 22px;
  }
  h3 {
    color: #878b95;
    font-size: 14px;
    margin-bottom: 20px;
  }
  p {
    font-size: 0.85714rem;
    line-height: 1.5;
    margin-top: 10px;
    color: #878b95;
  }
  .forgot a,
  span a {
    color: #35a3ef;
    font-size: 12px;
    text-decoration: none;
  }
  span a {
    margin: 40px 0;
  }
  .forgot {
    margin: 20px;
  }
  .social-alt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(106, 113, 125);
    margin-top: 20px;
  }
  .social-alt span {
    font-size: 14px;
    color: rgb(106, 113, 125);
  }
  .social-alt::before,
  .social-alt::after {
    -webkit-box-flex: 1;
    content: "";
    border-bottom: 1px solid rgb(211, 218, 230);
    flex: 1 1 0%;
  }

  .social-alt::before {
    margin-right: 0.75em;
  }
  .social-alt::after {
    margin-left: 0.75em;
  }
  .criteria {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
  }
  .passwordField {
    position: relative;
  }
  .lockSVG {
    width: 100%;
    text-align: center;
  }
  .lockSVG img {
    width: 50%;
    margin: 0 auto;
  }

  .password-pop {
    box-shadow: 0 0.9px 4px -1px rgb(0 0 0 / 20%),
      0 2.6px 8px -1px rgb(0 0 0 / 15%), 0 5.7px 12px -1px rgb(0 0 0 / 13%),
      0 15px 15px -1px rgb(0 0 0 / 10%);
    padding: 10px 20px;
    z-index: 99;
    position: absolute;
    background-color: #1d1e23;
    width: 100%;
    top: 70px;
  }
  .password-pop p {
    text-align: start;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .criteria img {
    width: 25px;
    height: 25px;
  }
  .criteria span {
    font-size: 16px;
    margin-left: 5px;
  }
  .password-pop h2 {
    text-align: start;
    font-size: 16px;
  }
  .password-pop hr {
    margin: 20px 0;
    border: 1px solid #353741;
  }

  .validation {
    background-color: #4a201e;
    padding: 20px 20px;
    display: flex;
    align-items: center;
  }
  .validation span {
    margin-left: 10px;
    color: #f98982;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 480px) {
    width: 70%;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 25%;
  }
`;
