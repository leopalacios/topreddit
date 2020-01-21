import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListIcon from '@material-ui/icons/List';
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
  StyledLoadingMore,
  StyledListIconContainer,
} from './styled';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.getPostList = this.getPostList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll = (e) => {
    const { isLoading, onGetPostList } = this.props;
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom && !isLoading) {
      onGetPostList();
    }
  }

  render() {
    const { onDismissAll, isLoading, posts, onToggleList, isListOpen } = this.props;

    return (
      <StyledListWrapper isListOpen={isListOpen}>
        <StyledListIconContainer onClick={onToggleList}><ListIcon /></StyledListIconContainer>
        <StyledListTitle>
          <StyledTitle>{ strings.LIST_TITLE }</StyledTitle>
        </StyledListTitle>
        <StyledPostsContainer>
          {
            isLoading && posts.length === 0 ?
            <CircularProgress />
            : <StyledScrollable onScroll={this.handleScroll}>
                { this.getPostList() }
                { isLoading && posts.length ? <StyledLoadingMore><CircularProgress /></StyledLoadingMore> : null }
              </StyledScrollable>
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
