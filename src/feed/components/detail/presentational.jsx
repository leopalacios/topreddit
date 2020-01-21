import React from 'react';
import { PostShape, Nullable } from '../../propTypes';
import {
  StyledDetailWrapper,
  StyledDetailTitle,
  StyledDetailImage,
  StyledDetailDescription,
  StyledDetailImageWrapper,
} from './styled';

const Detail = ({ post }) => {
  const { author, title, thumbnail } = post || {};

  return (
    <StyledDetailWrapper>
      <StyledDetailTitle>{ author }</StyledDetailTitle>
      {
        thumbnail
        && (
        <StyledDetailImageWrapper>
          <StyledDetailImage src={thumbnail} />
        </StyledDetailImageWrapper>
        )
      }
      <StyledDetailDescription>{ title }</StyledDetailDescription>
    </StyledDetailWrapper>
  );
};

Detail.propTypes = {
  post: Nullable(PostShape),
};

Detail.defaultProps = {
  post: {},
};

export default Detail;
