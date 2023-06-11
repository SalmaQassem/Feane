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
  font-size: 16px;
  background-color: #ffbe33;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e69c00;
  }
`;

export default AddButton;
