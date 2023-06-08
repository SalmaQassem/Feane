import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    & {
      max-width: 540px;
    }
  }
  @media (min-width: 769px) {
    & {
      max-width: 720px;
    }
  }
  @media (min-width: 1025px) {
    & {
      max-width: 960px;
    }
  }
  @media (min-width: 1201px) {
    & {
      max-width: 1170px;
    }
  }
`;
export default StyledContainer;
