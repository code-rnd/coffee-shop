import { OrderStatuses, PaymentTypes } from "../../shared/constants";
import { OrderModel } from "../../store/orders/orders.model";
import { ProductListMock } from "../productList";

export const OrderListMock: OrderModel[] = [
  {
    id: 1,
    EmployeeId: 1,
    startDate: new Date(),
    endDate: new Date(),
    productList: [...ProductListMock],
    pyamentType: PaymentTypes.PAY,
    status: OrderStatuses.COMPLETED,
    cutlery: 0,
    delivery: {
      courierId: 1,
      price: 150,
      startDate: new Date(),
      endDate: new Date(),
      comment: "Третий этаж",
    },
  },
  {
    id: 2,
    EmployeeId: 2,
    startDate: new Date(),
    endDate: new Date(),
    productList: [...ProductListMock],
    pyamentType: PaymentTypes.PAY,
    status: OrderStatuses.COMPLETED,
    cutlery: 0,
  },
  {
    id: 3,
    EmployeeId: 3,
    startDate: new Date(),
    endDate: new Date(),
    productList: [...ProductListMock],
    pyamentType: PaymentTypes.PAY,
    status: OrderStatuses.COMPLETED,
    cutlery: 0,
  },
  {
    id: 4,
    EmployeeId: 4,
    startDate: new Date(),
    endDate: new Date(),
    productList: [...ProductListMock],
    pyamentType: PaymentTypes.PAY,
    status: OrderStatuses.COMPLETED,
    cutlery: 0,
    delivery: {
      courierId: 2,
      price: 150,
      startDate: new Date(),
      endDate: new Date(),
    },
  },
];
