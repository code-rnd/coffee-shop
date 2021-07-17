import { Action, applyMiddleware, Dispatch, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const actionFunction: Middleware = ({ dispatch, getState }) => (
  next: Dispatch
) => (action: Function | Action) => {
  return action instanceof Function ? action(dispatch, getState) : next(action);
};

export const middlewares = composeWithDevTools(applyMiddleware(actionFunction));
