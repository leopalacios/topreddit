import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDetailWrapper,
} from './styled';

const Detail = ({ test }) => {
  return (
    <StyledDetailWrapper>
      detail
    </StyledDetailWrapper>
  );
};

Detail.propTypes = {
  test: PropTypes.string,
};

export default Detail;
