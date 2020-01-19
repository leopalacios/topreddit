import { connect } from 'react-redux';
import Post from './presentational';
import { dismissPost } from '../../actions';

export const actions = {
  onDismissPost: dismissPost,
};

export default connect(null, actions)(Post);
