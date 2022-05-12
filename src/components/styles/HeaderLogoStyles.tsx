import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 40px;

  span {
    background-color: #1e97ed;
    border-color: #1e97ed;
    padding: 8px 12px;
    border-radius: 5px;
  }
  p,
  a {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: #000;
    margin-left: 10px;
  }
`;
