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
  StyledCommentsSection,
} from './styled';

const ELLIPSIS_THRESHOLD = 100;
const POST_ANIMATION_CLASS = 'post';
const POST_FADEOUT_CLASS = 'postHide';
const ANIMATION_DELAY = 400;

const Post = ({ post, onDismissPost, onExpandPost }) => {
  const {
    id,
    author,
    created_utc,
    title,
    thumbnail,
    num_comments,
    is_read,
  } = post;

  const postTime = moment.unix(created_utc).fromNow();
  const ellipsedText = title.length > ELLIPSIS_THRESHOLD ? title.substring(0,ELLIPSIS_THRESHOLD - 1) + "..." : title;

  const dismissPostsAndAnimate = (e) => {
    e.currentTarget.closest(`.${POST_ANIMATION_CLASS}`).classList.add(POST_FADEOUT_CLASS);
    setTimeout(() => onDismissPost(id), ANIMATION_DELAY);
  };

  return (
    <StyledPostContainer className={ POST_ANIMATION_CLASS }>
      <StyledPostTitle>
        { !is_read && <StyledReadPostIcon /> }
        <StyledAuthor>{ author }</StyledAuthor>
        { postTime }
      </StyledPostTitle>
      <StyledPostBody onClick={() => onExpandPost(id)}>
        { thumbnail && <StyledThumbnail src={ thumbnail } /> }
        <StyledCommentsSection>
          <StyledPostListText>{ ellipsedText }</StyledPostListText>
          <StyledNextIcon />
        </StyledCommentsSection>
      </StyledPostBody>
      <StyledPostFooter>
        <StyledDismissPost onClick={(e) => dismissPostsAndAnimate(e)}>
          <StyledCloseIcon />{strings.DISMISS_POST }
        </StyledDismissPost>
        <StyledComments>{ num_comments } { strings.COMMENTS }</StyledComments>
      </StyledPostFooter>
    </StyledPostContainer>
  );
};

Post.propTypes = {
  post: PostShape,
  onDismissPost: PropTypes.func.isRequired,
};

export default Post;
