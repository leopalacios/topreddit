import { createAction } from 'redux-actions';
import ApiMock from '../api-mock'

export const dismissPost = createAction('DISMISS_POST', id => ({ id }));

export const expandPost = createAction('EXPAND_POST', id => ({ id }));

export const postsResponse = createAction('POSTS_RESPONSE', data => ({ data }));

export const postsRequest = createAction('POSTS_REQUEST', () => {});

export const getPostList = () => (dispatch) => {
  dispatch(postsRequest());

  ApiMock.getTop().then(
    (response) => {
      dispatch(postsResponse(response));
    }
  );
};
