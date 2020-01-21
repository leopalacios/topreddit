import styled from 'styled-components';
import { COLORS, SIZES, FONT_SIZES, DEVICES } from '../../../utils/css-constants';
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
  flex-direction: column;
  @media ${DEVICES.tablet} {
     flex-direction: row;
  }
`;

export const StyledPostBody = styled(StyledFlexCenteredDiv)`
  cursor: pointer;
  height: 150px;
  justify-content: space-around;
  margin-top: ${ SIZES.M };
  flex-direction: column;
  @media ${DEVICES.tablet} {
     flex-direction: row;
     margin-top: 0;
  }
`;

export const StyledComments = styled(StyledFlexCenteredDiv)`
  color: ${COLORS.ORANGE};
`;

export const StyledCommentsSection = styled(StyledFlexCenteredDiv)``;

export const StyledPostFooter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
  font-size: ${ FONT_SIZES.XS };
  margin-top: ${ SIZES.M };
  @media ${DEVICES.tablet} {
     font-size: ${ FONT_SIZES.S };
     margin-top: 0;
  }
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
  ::after {
    content: ".";
    visibility: hidden;
  }
`;

export const StyledPostContainer = styled.div`
  padding: ${ SIZES.XS };
  transition: transform 500ms ease-in;
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
  margin-top: ${ SIZES.XS };
  @media ${DEVICES.tablet} {
     margin-top: 0;
  }
`;

