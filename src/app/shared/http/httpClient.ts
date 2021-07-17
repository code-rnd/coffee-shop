import AxiosStatis, { AxiosInstance } from "axios";
import { urls } from "app/shared/constants/urls.const";

export enum HttpStatusValues {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  GatewayTimeout = 504,
}

export const axiosInstance: AxiosInstance = AxiosStatis.create({
  baseURL: urls.apiUrl,
});
