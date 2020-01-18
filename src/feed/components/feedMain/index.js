import { connect } from 'react-redux';
import Feed from './presentational';

const mapStateToProps = (state) => {
  const { test } = state.feed;

  return {
    test,
  };
};

export default connect(mapStateToProps)(Feed);
