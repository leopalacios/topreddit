import { connect } from 'react-redux';
import Feed from './presentational';
import { getPostList } from "../../actions";

const actions = {
  onGetPostList: getPostList,
};

const mapStateToProps = (state) => {
  const { test } = state.feed;

  return {
    test,
  };
};

export default connect(mapStateToProps, actions)(Feed);
