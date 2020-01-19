import { connect } from 'react-redux';
import List from './presentational';
import { getPostList, dismissPost, expandPost } from "../../actions";

const actions = {
  onGetPostList: getPostList,
  onDismissPost: dismissPost,
  onExpandPost: expandPost,
};

const mapStateToProps = (state) => {
  const { posts } = state.feed;

  return {
    posts,
  };
};

export default connect(mapStateToProps, actions)(List);
