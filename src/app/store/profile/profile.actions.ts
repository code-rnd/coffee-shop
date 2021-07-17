import {
  ActionFunction0,
  ActionFunction1,
  createAction,
  Action,
} from "redux-actions";
import { Dispatch } from "redux";
import { AUTH_DATA, urls } from "../../shared/constants";
import { UserModel } from "./profile.model";
import { EmployeeListMock } from "../../mocks/userList";

class ProfileActions {
  readonly prefix: string = "PROFILE";
  readonly SET_USER_DATA: string = `${this.prefix}.SET_USER_DATA`;
  readonly CLEAR_USER_DATA: string = `${this.prefix}.CLEAR_USER_DATA`;
  readonly SET_STATUS_LOADING: string = `${this.prefix}.SET_STATUS_LOADING`;

  setUserData: ActionFunction1<UserModel, Action<UserModel>> = createAction(
    this.SET_USER_DATA
  );
  clearUserData: ActionFunction0<Action<any>> = createAction(
    this.CLEAR_USER_DATA
  );
  setStatusLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_STATUS_LOADING
  );

  login: any = (userData: UserModel) => (dispatch: Dispatch) => {
    dispatch(this.setStatusLoading(true));
    try {
      localStorage.setItem(AUTH_DATA, userData.id.toString());
      dispatch(this.setUserData(userData));
    } catch (e) {
      window.confirm(
        `При попытке аторизации пользователя, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };

  logout: any = () => (dispatch: Dispatch) => {
    dispatch(this.clearUserData());
    window.location.href = urls.logout;
  };

  fetchUserData: any = () => async (dispatch: Dispatch) => {
    dispatch(this.setStatusLoading(true));
    try {
      /** const user: UserModel | undefined = undefined;
      localStorage.setItem(AUTH_DATA, user.id.toString());
      dispatch(this.setUserData(user)); */

      const isAuth = !!localStorage.getItem(AUTH_DATA);

      if (isAuth) {
        dispatch(this.login(EmployeeListMock[0]));
      }

      if (!isAuth) {
        dispatch(this.clearUserData());
      }
    } catch (e) {
      window.confirm(
        `При попытке загрузить данные пользователя, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };
}

export const profileActions = new ProfileActions();
