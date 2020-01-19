import styled from 'styled-components';
import { COLORS } from '../../../utils/css-constants';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const StyledCloseIcon = styled(HighlightOffIcon)({
  color: COLORS.ORANGE,
});

export const StyledPostTitle = styled.div`
  align-items: center;
  height: 40px;
  text-align: center;
  display: flex;
`;

export const StyledPostBody = styled.div`
  height: 150px;
`;

export const StyledPostFooter = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
`;

export const StyledComments = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.ORANGE};
`;

export const StyledAuthor = styled.span`
  margin-right: 4px;
  font-size: 20px;
`;

export const StyledCloseButton = styled.span`
  display: flex;
  align-items: center;
`;
