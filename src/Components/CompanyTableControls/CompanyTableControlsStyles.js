import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    justify-content: space-Around;
  }
`;
