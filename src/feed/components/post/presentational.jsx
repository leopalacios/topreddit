import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import * as strings from './strings';
import {
  StyledPostTitle,
  StyledPostBody,
  StyledPostFooter,
  StyledComments,
  StyledCloseIcon,
  StyledAuthor,
  StyledCloseButton,
} from './styled';

const Post = ({ post, onDismissPost }) => {
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
    <div>
      <StyledPostTitle>
        <StyledAuthor>{ author }</StyledAuthor>
        { postTime }
      </StyledPostTitle>
      <StyledPostBody><img src={thumbnail} />{ title }<NavigateNextIcon /></StyledPostBody>
      <StyledPostFooter>
        <StyledCloseButton onClick={() => onDismissPost(id)}>
          <StyledCloseIcon />{strings.DISMISS_POST }
        </StyledCloseButton>
        <StyledComments>{ num_comments } {strings.COMMENTS }</StyledComments>
      </StyledPostFooter>
    </div>
  );
};

export const PostShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  created_utc: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  num_comments: PropTypes.number.isRequired,
}).isRequired;

Post.propTypes = {
  post: PostShape,
  onDismissPost: PropTypes.func.isRequired,
};

export default Post;
