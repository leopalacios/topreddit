import styled from 'styled-components';
import { StyledFlexCenteredDiv } from '../../../utils/base-styled';
import { FONT_SIZES } from '../../../utils/css-constants';

export const StyledDetailWrapper = styled.div`
  width: 80%;
`;

export const StyledDetailTitle = styled.div`
  font-size: ${ FONT_SIZES.L };
`;

export const StyledDetailImageWrapper = styled(StyledFlexCenteredDiv)`
   justify-content: center;
`;

export const StyledDetailImage = styled.img`
  height: 300px;
  width: 300px;
`;

export const StyledDetailDescription = styled(StyledFlexCenteredDiv)`
  
`;
