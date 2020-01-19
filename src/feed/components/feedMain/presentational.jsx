import React from 'react';
import Detail from '../detail';
import List from '../list';

import { StyledMainContainer } from './styled';

const Feed = () => {
  return (
    <StyledMainContainer>
      <List/>
      <Detail/>
    </StyledMainContainer>
  );
};

export default Feed;
