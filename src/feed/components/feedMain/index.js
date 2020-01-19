import { connect } from 'react-redux';
import Feed from './presentational';
import { getPostList } from "../../actions";

const actions = {
  onGetPostList: getPostList,
};

export default connect(null, actions)(Feed);
