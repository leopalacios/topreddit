import React from 'react';
import PropTypes from 'prop-types';

import { StyleTest } from './styled';

const Feed = ({ test }) => {
  return (
    <StyleTest>--{ test }----</StyleTest>
  );
};

Feed.propTypes = {
  test: PropTypes.string,
};

export default Feed;
