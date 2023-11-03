import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 90%;
  margin: auto;
`;


export const PaginationDiv = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: left;
  align-content: center;
  overflow: auto;
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

export const PaginationNumSpan = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  margin: 4px;
  padding: 4px;
  width: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
