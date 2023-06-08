import styled from "styled-components";
import Link from "next/link";

export const Button = styled(Link)`
  display: inline-block;
  background-color: #ffbe33;
  color: #fff;
  border-radius: 45px;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    background-color: #e69c00;
  }
`;
