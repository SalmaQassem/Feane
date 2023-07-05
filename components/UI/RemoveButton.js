import styled from "styled-components";

const RemoveButton = styled.button`
  color: #ffbe33;
  font-size: 15px;
  text-transform: capitalize;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 1200px) {
    & {
      font-size: 1.05rem;
    }
  }

  @media (min-width: 2000px) {
    & {
      font-size: 1.03125vw;
    }
  }
`;

export default RemoveButton;
