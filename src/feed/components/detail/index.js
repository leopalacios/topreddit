import { connect } from 'react-redux';
import Detail from './presentational';

const mapStateToProps = (state) => {
  const { selectedPost, posts } = state.feed;
  const selectedPostInfo = selectedPost ? posts.find(post => post.data.id === selectedPost) : {};

  return {
    post: selectedPostInfo.data,
  };
};

export default connect(mapStateToProps)(Detail);
