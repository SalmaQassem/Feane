import styled from "styled-components";

const QuantityButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: #ffbe33;
  color: #fff;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #e69c00;
  }

  @media (min-width: 1200px) {
    & {
      font-size: 0.91rem;
    }
  }

  @media (min-width: 2000px) {
    & {
      width: 2.2vh;
      height: 2.2vh;
      font-size: 0.89375vw;
    }
  }
`;

export default QuantityButton;
