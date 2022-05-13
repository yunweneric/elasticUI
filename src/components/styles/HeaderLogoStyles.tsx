import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px;
  width: 100%;

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

  .img {
    width: 11%;
    position: absolute;
    /* background-color: #1e97ed; */
    top: 10px;
    left: 44%;
  }
  img {
    width: 100%;
  }
  .empty {
    background-color: #1e97ed;
  }
`;
