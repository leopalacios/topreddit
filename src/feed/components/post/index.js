import { connect } from 'react-redux';
import Post from './presentational';
import { dismissPost, expandPost } from '../../actions';

export const actions = {
  onDismissPost: dismissPost,
  onExpandPost: expandPost,
};

export default connect(null, actions)(Post);
