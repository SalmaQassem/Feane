import styled from "styled-components";

const BookButton = styled.button`
  padding: 0.625em 3.4375rem;
  margin-top: 15px;
  display: inline-block;
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
  @media (min-width: 1200px) {
    & {
      padding: 0.75rem 4.125rem;
      margn-top: 1.78125;
      font-size: 1.125rem;
      border-radius: 4.5vh;
    }
  }
  @media (min-width: 2000px) {
    & {
      padding: 1.375vh 3.85vw;
      font-size: 1.1vw;
    }
  }
`;

export default BookButton;
