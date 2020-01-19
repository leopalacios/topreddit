import React from 'react';
import PropTypes from 'prop-types';
import * as strings from './strings';

const Post = ({ post }) => {
  const {
    author,
    created_utc,
    title,
    thumbnail,
    num_comments,
  } = post;

  console.log(post);

  return (
    <div>
      <div>{ author }{ created_utc }</div>
      <div>{ thumbnail }{ title }</div>
      <div>{strings.DISMISS_POST } { num_comments } {strings.COMMENTS }</div>
    </div>
  );
};

export const PostShape = PropTypes.shape({
  author: PropTypes.string.isRequired,
  created_utc: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  num_comments: PropTypes.number.isRequired,
}).isRequired;

Post.propTypes = {
  post: PostShape,
};

export default Post;
