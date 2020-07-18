import styled from 'styled-components';
import { MAIN_COLOR, ACCENT_COLOR, SECONDARY_COLOR } from 'Config/Colors';

export const Cell = styled.td`
  padding: 12px 8px;
`;

export const Row = styled.tr`
  border-bottom: 1px solid ${MAIN_COLOR};
  &:hover {
    background-color: ${ACCENT_COLOR};
    td {
      border-color: ${SECONDARY_COLOR};
    }
  }
`;
