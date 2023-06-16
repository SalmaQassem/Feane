import styled from "styled-components";
import Link from "next/link";

const Button = styled(Link)`
  padding: 0.5rem 1.8rem;
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

  @media (min-width: 2000px) {
    & {
      padding: 1.1vh 2vw;
      border-radius: 4vw;
      font-size: 1.05vw;
    }
  }
`;
export default Button;
