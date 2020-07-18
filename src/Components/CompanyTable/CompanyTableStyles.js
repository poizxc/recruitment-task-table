import styled from 'styled-components';
import { MAIN_COLOR, SECONDARY_COLOR } from 'Config/Colors';

export const CenteredTable = styled.table`
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  min-width: 600px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${SECONDARY_COLOR};
    border-radius: 0px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: ${MAIN_COLOR};
  }
`;
