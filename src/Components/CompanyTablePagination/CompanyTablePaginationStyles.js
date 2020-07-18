import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 320px;
  @media only screen and (max-width: 768px) {
    margin: 20px auto 0 auto;
  }
`;

export const MobileLastInFlex = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100vw;
    order: 3;
  }
`;
