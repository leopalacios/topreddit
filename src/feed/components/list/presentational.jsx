import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as strings from './strings';
import { PostShape, EmptyShape} from '../../propTypes';
import Post from '../post';
import {
  StyledListWrapper,
  StyledListTitle,
  StyledTitle,
  StyledDismissButton,
  StyledPostsContainer,
  StyledScrollable,
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
        onDismissPost={ onDismissPost }w
        onExpandPost={ onExpandPost }
      />);
  }

  render() {
    const { onDismissAll, isLoading } = this.props;

    return (
      <StyledListWrapper>
        <StyledListTitle>
          <StyledTitle>{ strings.LIST_TITLE }</StyledTitle>
        </StyledListTitle>
        <StyledPostsContainer>
          {
            isLoading ?
            <CircularProgress />
            : <StyledScrollable>{ this.getPostList() }</StyledScrollable>
          }
        </StyledPostsContainer>
        <StyledDismissButton onClick={ onDismissAll }>{ strings.DISMISS_ALL }</StyledDismissButton>
      </StyledListWrapper>
    );
  };
};

List.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([PostShape, EmptyShape])),
  onGetPostList: PropTypes.func.isRequired,
  onDismissPost: PropTypes.func.isRequired,
  onExpandPost: PropTypes.func.isRequired,
  onDismissAll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default List;
