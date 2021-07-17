import { Action, handleActions } from "redux-actions";
import { coordinatesActions } from "./coordinates.actions";

import {
  CoordinatesModel,
  CoordinatesStateModel,
  GeolocationModel,
} from "./coordinates.model";

const initialState: CoordinatesStateModel = {
  coordinates: undefined,
  geolocation: undefined,
  isLoading: false,
};

const setCoordinates = (
  state: CoordinatesStateModel,
  action: Action<CoordinatesModel>
): CoordinatesStateModel => ({
  ...state,
  coordinates: action.payload,
  isLoading: false,
});

const setGeolocation = (
  state: CoordinatesStateModel,
  action: Action<GeolocationModel>
): CoordinatesStateModel => ({
  ...state,
  geolocation: action.payload,
  isLoading: false,
});

const setStatusLoading = (
  state: CoordinatesStateModel,
  action: Action<boolean>
): CoordinatesStateModel => ({
  ...state,
  isLoading: action.payload,
});

const reduceMap: { [key: string]: any } = {
  [coordinatesActions.SET_COORDINATES]: setCoordinates,
  [coordinatesActions.SET_GEOLOCATION]: setGeolocation,
  [coordinatesActions.SET_STATUS_LOADING]: setStatusLoading,
};

export const coordinatesReducer = handleActions(reduceMap, initialState);
