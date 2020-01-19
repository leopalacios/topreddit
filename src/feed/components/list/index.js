import { connect } from 'react-redux';
import List from './presentational';
import {
  getPostList,
  dismissPost,
  expandPost,
  dismissAll,
} from "../../actions";

const actions = {
  onGetPostList: getPostList,
  onDismissPost: dismissPost,
  onExpandPost: expandPost,
  onDismissAll: dismissAll,
};

const mapStateToProps = (state) => {
  const { posts, isLoading } = state.feed;

  return {
    posts,
    isLoading
  };
};

export default connect(mapStateToProps, actions)(List);
