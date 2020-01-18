import { handleActions } from 'redux-actions';

const DEFAULT_STATE = {
  test: 'test',
};

export default handleActions(
  {
    SOME_COOL_ACTION: (state) => ({
      ...state,
    }),
  },
  DEFAULT_STATE,
);
