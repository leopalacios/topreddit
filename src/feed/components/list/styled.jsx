import styled from 'styled-components';
import { COLORS, SIZES, FONT_SIZES } from '../../../utils/css-constants';

export const StyledListWrapper = styled.div`
  width: 400px;
  background-color: ${ COLORS.BLACK };
  color: ${ COLORS.WHITE };
`;

export const StyledListTitle = styled.div`
  background-color: ${ COLORS.DARK_GREY };
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: ${ FONT_SIZES.L };
`;

export const StyledTitle = styled.div`
  margin-bottom: ${ SIZES.S };
`;
