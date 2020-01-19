import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { PostShape } from '../../propTypes';
import * as strings from './strings';
import {
  StyledPostTitle,
  StyledPostBody,
  StyledPostFooter,
  StyledComments,
  StyledCloseIcon,
  StyledAuthor,
  StyledReadPostIcon,
  StyledPostContainer,
  StyledThumbnail,
  StyledPostListText,
  StyledNextIcon,
  StyledDismissPost,
} from './styled';

const ELLIPSIS_THRESHOLD = 100;

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
  const ellipsedText = title.length > ELLIPSIS_THRESHOLD ? title.substring(0,ELLIPSIS_THRESHOLD - 1) + "..." : title;

  return (
    <StyledPostContainer>
      <StyledPostTitle>
        <StyledReadPostIcon />
        <StyledAuthor>{ author }</StyledAuthor>
        { postTime }
      </StyledPostTitle>
      <StyledPostBody onClick={() => onExpandPost(id)}>
        { thumbnail && <StyledThumbnail src={thumbnail} /> }
        <StyledPostListText>{ ellipsedText }</StyledPostListText>
        <StyledNextIcon />
      </StyledPostBody>
      <StyledPostFooter>
        <StyledDismissPost onClick={() => onDismissPost(id)}>
          <StyledCloseIcon />{strings.DISMISS_POST }
        </StyledDismissPost>
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
