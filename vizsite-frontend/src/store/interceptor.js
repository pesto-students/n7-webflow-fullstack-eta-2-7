import { actionTypes } from 'redux-query';

const {
  MUTATE_ASYNC,
  REQUEST_ASYNC,
} = actionTypes;

// eslint-disable-next-line no-unused-vars
export const jwtMiddleware = (store) => (next) => (action) => {
  const jwtToken = localStorage.getItem('token') || '';
  if (
    action
    && (action.type === MUTATE_ASYNC || action.type === REQUEST_ASYNC)
  ) {
    // This is a redux-query action so add the JWT header
    const options = action.options || {};
    const headers = options.headers || {};
    const updatedAction = {
      ...action,
      options: {
        ...options,
        headers: {
          ...headers,
          Authorization: `Bearer ${jwtToken}`,
          'Access-Control-Allow-Origin': '*',
        },
      },
    };

    // Let the action continue, but now with the JWT header.
    next(updatedAction);
  } else {
    // This isn't a redux-query action so just let it pass through
    next(action);
  }
};
