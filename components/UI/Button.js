import styled from "styled-components";
import Link from "next/link";

const Button = styled(Link)`
  padding: 0.5rem 1.875rem;
  display: inline-block;
  background-color: #ffbe33;
  color: #fff;
  border-radius: 45px;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    background-color: #e69c00;
  }

  @media (min-width: 1200px) {
    & {
      padding: 0.6rem 2.25rem;
      border-radius: 4.5vh;
      font-size: 1.125rem;
    }
  }
  @media (min-width: 2000px) {
    & {
      padding: 1.1vh 2.1vw;
      font-size: 1.1vw;
    }
  }
`;
export default Button;
