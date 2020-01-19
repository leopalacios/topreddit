import { createAction } from 'redux-actions';

export const dismissPost = createAction('DISMISS_POST', id => ({ id }));

export const expandPost = createAction('EXPAND_POST', id => ({ id }));
