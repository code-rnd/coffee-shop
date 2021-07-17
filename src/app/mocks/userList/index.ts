import { PermissionList } from "app/shared/constants/permissions.const";
import { UserModel } from "app/store/profile/profile.model";

export const EmployeeListMock: UserModel[] = [
  {
    id: 1,
    name: "Employee Admin",
    cash: 35_000,
    permissions: PermissionList.ADMIN,
    location: [
      {
        city: "Тюмень",
        street: "Челюскинцев",
        house: "10",
        businessCenter: "БЦ Альянс",
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        city: "Тюмень",
        street: "Пермякова",
        house: "1 строение 5",
        businessCenter: "БЦ Альянс",
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
  {
    id: 2,
    name: "Employee User",
    cash: 11_030,
    permissions: PermissionList.USER,
    location: [
      {
        city: "Тюмень",
        street: "Пермякова",
        house: "1 строение 5",
        businessCenter: "БЦ Альянс",
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
];
