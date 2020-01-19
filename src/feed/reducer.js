import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
  posts: [],
  selectedPost: '',
};

export default handleActions(
  {
    POSTS_RESPONSE: (state, { payload }) => {
      const posts = (payload.data.data.children || [])
        .map(post => ({
          ...post,
          data: {
            ...post.data,
            is_read: false,
          } ,
        }));

      return ({
        ...state,
        posts,
      });
    },
    EXPAND_POST: (state, { payload: { id } }) => {
      const updatedPostIndex = state.posts.findIndex(post => post.data.id === id);
      const updatedPosts = [ ...state.posts ];

      if (updatedPostIndex !== -1) {
        updatedPosts[updatedPostIndex].data.is_read = true;
      }

      return ({
        posts: updatedPosts,
        selectedPost: id,
      });
    },
    DISMISS_POST: (state, { payload: { id } }) => {
      const updatedPostIndex = state.posts.findIndex(post => post.data.id === id);
      const updatedPosts = [ ...state.posts ];

      if (updatedPostIndex !== -1) {
        updatedPosts.splice(updatedPostIndex, 1);
      }

      return ({
        ...state,
        posts: updatedPosts,
      });
    },
  },
  DEFAULT_STATE,
);
