import PropTypes from 'prop-types';

export const PostShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  created_utc: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  num_comments: PropTypes.number.isRequired,
}).isRequired;
