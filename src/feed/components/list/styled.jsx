import styled from 'styled-components';
import { COLORS } from '../../../utils/css-constants';

export const StyledListWrapper = styled.div`
  max-width: 40%;
  background-color: ${ COLORS.BLACK };
  color: ${ COLORS.WHITE };
`;

export const StyledListTitle = styled.div`
  background-color: ${ COLORS.DARK_GREY };
  height: 70px;
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledTitle = styled.div`
  margin-bottom: 10px;
`;
