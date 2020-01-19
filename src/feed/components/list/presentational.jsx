import React from 'react';
import PropTypes from 'prop-types';
import * as strings from './strings';
import { PostShape } from '../../propTypes';
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
    return this.props.posts.map(post => <Post post={ post.data } />)
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
  posts: PropTypes.arrayOf(PostShape),
  onGetPostList: PropTypes.func.isRequired,
};

export default List;
