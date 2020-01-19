import { connect } from 'react-redux';
import List from './presentational';
import { getPostList } from "../../actions";

const actions = {
  onGetPostList: getPostList,
};

const mapStateToProps = (state) => {
  const { posts } = state.feed;

  return {
    posts,
  };
};

export default connect(mapStateToProps, actions)(List);
