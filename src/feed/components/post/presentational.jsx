import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PostShape } from '../../propTypes';
import * as strings from './strings';
import {
  StyledPostTitle,
  StyledPostBody,
  StyledPostFooter,
  StyledComments,
  StyledCloseIcon,
  StyledAuthor,
  StyledFlexCenteredDiv,
  StyledReadPostIcon,
  StyledPostContainer,
  StyledThumbnail,
} from './styled';

const Post = ({ post, onDismissPost, onExpandPost }) => {
  const {
    id,
    author,
    created_utc,
    title,
    thumbnail,
    num_comments,
  } = post;

  const postTime = moment.unix(created_utc).fromNow();

  return (
    <StyledPostContainer>
      <StyledPostTitle>
        <StyledReadPostIcon />
        <StyledAuthor>{ author }</StyledAuthor>
        { postTime }
      </StyledPostTitle>
      <StyledPostBody onClick={() => onExpandPost(id)}>
        <StyledThumbnail src={thumbnail} />
        { title }
        <NavigateNextIcon />
      </StyledPostBody>
      <StyledPostFooter>
        <StyledFlexCenteredDiv onClick={() => onDismissPost(id)}>
          <StyledCloseIcon />{strings.DISMISS_POST }
        </StyledFlexCenteredDiv>
        <StyledComments>{ num_comments } {strings.COMMENTS }</StyledComments>
      </StyledPostFooter>
    </StyledPostContainer>
  );
};

Post.propTypes = {
  post: PostShape,
  onDismissPost: PropTypes.func.isRequired,
};

export default Post;
