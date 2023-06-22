import styled from "styled-components";

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  background-color: #ffbe33;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e69c00;
  }
  @media (min-width: 1200px) {
    & {
      width: 50px;
      height: 50px;
      font-size: 1.12rem;
    }
  }
  @media (min-width: 2000px) {
    & {
      width: 3vw;
      height: 3vw;
      font-size: 1.1vw;
    }
  }
`;

export default AddButton;
