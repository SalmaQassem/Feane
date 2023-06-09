import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 93%;
  padding: 0 4vw;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1025px) {
    & {
      padding: 0 3vw;
    }
  }
  @media (min-width: 1201px) {
    & {
      padding: 0 9vw;
    }
  }
`;
export default StyledContainer;
