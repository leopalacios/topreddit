import { connect } from 'react-redux';
import List from './presentational';
import {
  getPostList,
  dismissPost,
  expandPost,
  dismissAll,
  toggleList,
} from "../../actions";

const actions = {
  onGetPostList: getPostList,
  onDismissPost: dismissPost,
  onExpandPost: expandPost,
  onDismissAll: dismissAll,
  onToggleList: toggleList,
};

const mapStateToProps = (state) => {
  const { posts, isLoading, isListOpen } = state.feed;

  return {
    posts,
    isLoading,
    isListOpen,
  };
};

export default connect(mapStateToProps, actions)(List);
