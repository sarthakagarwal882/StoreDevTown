import styled from "styled-components";

export const CardDiv = styled.div`
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: 11px 11px 22px #8f8f8f, -11px -11px 22px #ffffff;
  width: 20%;
  height: 25rem;
  display: ${(props) => props.$display};
  margin: 2.5%;
  transition: 0.25s ease-in-out;
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    width: 30%;
    margin: 1.25%;
  }
  @media only screen and (max-width: 700px) {
    width: 45%;
    margin: 2.5%;
    height: 20rem;
  }
  /* @media only screen and (max-width: 1000px) {
    width: 30%;
    margin: 1.25%;
  } */

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const CardContentDiv = styled.div`
  margin: 0.1rem 0.7rem 0;
  display: flex;
  flex-direction: column;
`;

export const CategoryPara = styled.p`
  font-size: 0.9rem;
  /* @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
  } */
`;

export const CategorySpan = styled.span`
  font-weight: 500;
  /* @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
  } */
`;

export const TitlePara = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;
export const PricePara = styled.p`
  font-size: 1.3rem;
  margin: 0;
`;
