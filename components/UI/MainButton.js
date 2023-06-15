import styled from "styled-components";

const BookButton = styled.button`
  display: inline-block;
  padding: 10px 55px;
  margin-top: 15px;
  background-color: #ffbe33;
  color: #fff;
  font-family: "OpenSans-Regular", sans-serif;
  border-radius: 45px;
  border: none;
  line-height: inherit;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    background-color: #e69c00;
  }
`;

export default BookButton;
