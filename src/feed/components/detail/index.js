import { connect } from 'react-redux';
import Detail from './presentational';

const mapStateToProps = (state) => {
  const { selectedPost, posts } = state.feed;
  let selectedPostInfo = posts.find(post => post.data.id === selectedPost);

  return {
    post: selectedPostInfo ? selectedPostInfo.data : null,
  };
};

export default connect(mapStateToProps)(Detail);
