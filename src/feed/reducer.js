import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
  posts: [],
};

export default handleActions(
  {
    POSTS_RESPONSE: (state, { payload }) => ({
      ...state,
      posts: payload.data.data.children,
    }),
  },
  DEFAULT_STATE,
);
