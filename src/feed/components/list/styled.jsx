import styled from 'styled-components';
import { COLORS, SIZES, FONT_SIZES } from '../../../utils/css-constants';

export const StyledListWrapper = styled.div`
  width: 400px;
  background-color: ${ COLORS.BLACK };
  color: ${ COLORS.WHITE };
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
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

export const StyledDismissButton = styled.div`
  text-align: center;
  color: ${ COLORS.ORANGE };
  cursor: pointer;
  margin: ${ SIZES.S } 0 ${ SIZES.S } 0;
`;

export const StyledPostsContainer = styled.div`
  flex-grow: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledScrollable = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;
