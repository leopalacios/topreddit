import styled from 'styled-components';
import { COLORS, SIZES, FONT_SIZES } from '../../../utils/css-constants';
import { StyledFlexCenteredDiv } from '../../../utils/base-styled';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const StyledCloseIcon = styled(HighlightOffIcon)`
  color: ${ COLORS.ORANGE };
  margin-right: ${ SIZES.XXS };
`;

export const StyledNextIcon = styled(NavigateNextIcon)`
  margin-left: ${ SIZES.XS };
`;

export const StyledPostTitle = styled(StyledFlexCenteredDiv)`
  height: 40px;
  text-align: center;
`;

export const StyledPostBody = styled(StyledFlexCenteredDiv)`
  cursor: pointer;
  height: 150px;
  justify-content: space-around;
`;

export const StyledComments = styled(StyledFlexCenteredDiv)`
  color: ${COLORS.ORANGE};
`;

export const StyledPostFooter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
`;

export const StyledAuthor = styled.span`
  margin: 0 ${ SIZES.XXS } 0 ${ SIZES.XS };
  font-size: ${ FONT_SIZES.M }
`;

export const StyledReadPostIcon = styled.div`
  height: 12px;
  width: 12px;
  background-color: blue;
  border-radius: 100%;
  margin-left: ${ SIZES.XS };
`;

export const StyledPostContainer = styled.div`
  padding: ${ SIZES.XS };
`;

export const StyledThumbnail = styled.img`
  height: 100px;
  width: 100px;
`;

export const StyledDismissPost = styled(StyledFlexCenteredDiv)`
  cursor: pointer;
`;

export const StyledPostListText = styled.div`
  flex: 1;
  margin-left: ${ SIZES.S };
`;
