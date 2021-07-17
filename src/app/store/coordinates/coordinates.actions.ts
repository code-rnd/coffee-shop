import { ActionFunction1, createAction, Action } from "redux-actions";
import { Dispatch } from "redux";

import { CoordinatesModel } from "./coordinates.model";
import { axiosInstance } from "../../shared/http/httpClient";
import { urls } from "../../shared/constants";

class CoordinatesActions {
  readonly prefix: string = "COORDINATES";
  readonly SET_STATUS_LOADING: string = `${this.prefix}.SET_STATUS_LOADING`;
  readonly SET_COORDINATES: string = `${this.prefix}.SET_COORDINATES`;
  readonly SET_GEOLOCATION: string = `${this.prefix}.SET_GEOLOCATION`;

  setStatusLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_STATUS_LOADING
  );
  setCoordinates: ActionFunction1<
    CoordinatesModel | undefined,
    Action<CoordinatesModel | undefined>
  > = createAction(this.SET_COORDINATES);

  setGeolocation: ActionFunction1<any, Action<any>> = createAction(
    this.SET_GEOLOCATION
  );

  fetchCoordinates = () => (dispatch: Dispatch) => {
    dispatch(this.setStatusLoading(true));
    try {
      if (!navigator?.geolocation) return undefined;

      navigator.geolocation.getCurrentPosition(({ coords }) => {
        dispatch(
          this.setCoordinates({
            latitude: coords.latitude,
            longitude: coords.longitude,
          })
        );
      });
    } catch (e) {
      window.confirm(
        `При попытке загрузить координаты устройства, произошла ошибка: ${e.message}`
      );
      dispatch(this.setStatusLoading(false));
    }
  };

  fetchGeoLocation = (coords: CoordinatesModel) => async (
    dispatch: Dispatch
  ) => {
    const token = "46c3cf317a3e408a88ccefa30701b1e5";
    const { latitude, longitude } = coords;
    const url = `${urls.geolocation}json?q=${latitude}+${longitude}&key=${token}`;

    dispatch(this.setStatusLoading(true));
    try {
      const response = await axiosInstance.get(url);

      dispatch(this.setGeolocation(response?.data?.results?.[0]?.components));
    } catch (e) {
      window.confirm(
        `При попытке загрузить местоположение устройства, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };
}

export const coordinatesActions = new CoordinatesActions();
