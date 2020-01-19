import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../detail';
import List from '../list';

import { StyledMainContainer } from './styled';

const Feed = ({ test }) => {
  return (
    <StyledMainContainer>
      <List/>
      <Detail/>
    </StyledMainContainer>
  );
};

Feed.propTypes = {
  test: PropTypes.string,
};

export default Feed;
