import { LocationModel } from "../../../../../store/coordinates/coordinates.model";

/**
 * Возвращаю полный адрес */
export const getFullAddress = (location: LocationModel): string => {
  const { street, house } = location;

  return `${street}, ${house}`;
};

/**
 * Возвращаю разницу между двумя датами, в часах
 * TODO Доработать время работы */
export const getTimeInterval = (location: LocationModel): string => {
  const { startDate, endDate } = location;

  return `c 08:00 до 22:00`;
};
