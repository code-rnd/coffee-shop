export interface CoordinatesModel {
  latitude: number;
  longitude: number;
}

export interface GeolocationModel extends Partial<any> {}

export interface CoordinatesStateModel {
  coordinates?: CoordinatesModel;
  geolocation?: GeolocationModel;
  isLoading: boolean;
}

export interface LocationModel {
  city: string;
  street: string;
  house: string;
  businessCenter: string;
  startDate: Date;
  endDate: Date;
}
