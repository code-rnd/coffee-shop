import { ProfileState, UserModel } from "./profile.model";
import { Action, handleActions } from "redux-actions";
import { profileActions } from "./profile.actions";
import { EmployeeListMock } from "../../mocks/userList";

const initialState: ProfileState = {
  user: EmployeeListMock[0],
  isLoading: false,
};

const setUserData = (state: ProfileState, action: Action<UserModel>) => ({
  ...state,
  user: action.payload,
  isLoading: false,
});

const clearUserData = (state: ProfileState) => ({
  ...state,
  user: undefined,
  isLoading: false,
});

const setStatusLoading = (state: ProfileState, action: Action<boolean>) => ({
  ...state,
  isLoading: action.payload,
});

const reduceMap: { [key: string]: any } = {
  [profileActions.SET_USER_DATA]: setUserData,
  [profileActions.CLEAR_USER_DATA]: clearUserData,
  [profileActions.SET_STATUS_LOADING]: setStatusLoading,
};

export const profileReducer = handleActions(reduceMap, initialState);
