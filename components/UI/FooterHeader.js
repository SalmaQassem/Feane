import styled from "styled-components";

const FooterHeader = styled.h4`
  margin-bottom: 20px;
  font-family: "DancingScript-Regular", cursive;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: capitalize;

  @media (min-width: 1200px) {
    & {
      margin-bottom: 2.375vh;
      font-size: 1.96rem;
    }
  }

  @media (min-width: 2000px) {
    & {
      font-size: 1.925vw;
    }
  }
`;

export default FooterHeader;
