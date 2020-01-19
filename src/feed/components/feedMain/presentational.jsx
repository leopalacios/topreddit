import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../detail';
import List from '../list';

import { StyleTest } from './styled';

const Feed = ({ test }) => {
  return (
    <div>
      <List/>
      <Detail/>
    </div>
  );
};

Feed.propTypes = {
  test: PropTypes.string,
};

export default Feed;
