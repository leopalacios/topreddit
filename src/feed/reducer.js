import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
  posts: [],
  selectedPost: '',
  isLoading: false,
};

export default handleActions(
  {
    POSTS_RESPONSE: (state, { payload }) => {
      const previousPosts = [ ...state.posts ];
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
        posts: previousPosts.concat(posts),
        isLoading: false,
      });
    },
    EXPAND_POST: (state, { payload: { id } }) => {
      const updatedPostIndex = state.posts.findIndex(post => post.data.id === id);
      const updatedPosts = [ ...state.posts ];

      if (updatedPostIndex !== -1) {
        updatedPosts[updatedPostIndex].data.is_read = true;
      }

      return ({
        isLoading: false,
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
    DISMISS_ALL: () => ({
      ...DEFAULT_STATE,
    }),
    POSTS_REQUEST: (state) => ({
      ...state,
      isLoading: true,
    }),
  },
  DEFAULT_STATE,
);
