import styled from "styled-components";
const SocialButtons = () => {
  return (
    <ButtonStyles>
      <button>
        <img src="/assets/svgs/googleLogo.svg" alt="" />
        <span className="text">Google</span>
      </button>
      <button>
        <img src="/assets/svgs/microsoftLogo.svg" alt="" />
        <span className="text">Microsoft</span>
      </button>
    </ButtonStyles>
  );
};

const ButtonStyles = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 109, 228, 0.2);
    appearance: none;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    text-align: center;
    max-width: 100%;
    width: 49%;
    vertical-align: middle;
    font-weight: 400;
    line-height: 1.71429rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.25s ease-in-out,
      border-color 0.25s ease-in-out;
    outline-offset: -1px;
    box-shadow: 0 0.8px 0.8px rgb(0 0 0 / 10%), 0 2.3px 2px rgb(0 0 0 / 8%);
    border-radius: 6px;
    border: none;
    min-width: 112px;
  }
  span {
    color: #36a2ef;
    margin-left: 10px;
  }
`;

export default SocialButtons;
