import { CoordinatesModel } from "./coordinates.model";

export const getCoordinates = (): CoordinatesModel | undefined => {
  let response = undefined;

  //   if (!navigator?.geolocation) return response;

  navigator.geolocation.getCurrentPosition(({ coords }) => (response = coords));

  return response;
};
