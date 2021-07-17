import { PermissionList } from "app/shared/constants/permissions.const";
import { LocationModel } from "../coordinates/coordinates.model";

export interface UserModel {
  id: number;
  permissions: PermissionList;
  name: string;
  cash: number;
  location: LocationModel[];
}

export interface ProfileState {
  user?: UserModel;
  isLoading: boolean;
}
