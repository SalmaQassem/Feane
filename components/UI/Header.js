import styled from "styled-components";

const Header = styled.h3`
  font-family: "DancingScript-Bold", cursive;
  font-size: 40px;
  line-height: 1.2;
  text-transform: capitalize;

  @media (min-width: 1200px) {
    & {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 2000px) {
    & {
      font-size: 2.75vw;
    }
  }
`;

export default Header;
