import React from 'react';
import PropTypes from 'prop-types';
import * as strings from './strings';
import { PostShape, EmptyShape} from '../../propTypes';
import Post from '../post';
import {
  StyledListWrapper,
  StyledListTitle,
  StyledTitle,
} from './styled';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.getPostList = this.getPostList.bind(this);
  }

  componentDidMount() {
    this.props.onGetPostList();
  }

  getPostList() {
    const { onDismissPost, onExpandPost } = this.props;

    return this.props.posts.map(post =>
      <Post
        post={ post.data }
        key={ post.data.id }
        onDismissPost={ onDismissPost }
        onExpandPost={ onExpandPost }
      />);
  }

  render() {
    return (
      <StyledListWrapper>
        <StyledListTitle>
          <StyledTitle>{ strings.LIST_TITLE }</StyledTitle>
        </StyledListTitle>
        { this.getPostList() }
      </StyledListWrapper>
    );
  };
};

List.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([PostShape, EmptyShape])),
  onGetPostList: PropTypes.func.isRequired,
  onDismissPost: PropTypes.func.isRequired,
  onExpandPost: PropTypes.func.isRequired,
};

export default List;
