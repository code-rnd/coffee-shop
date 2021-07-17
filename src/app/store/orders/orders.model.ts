import { OrderStatuses, PaymentTypes } from "../../shared/constants";
import { ProductModel } from "../products/products.model";

export interface OrderModel {
  id: number;
  EmployeeId: number;
  queue?: number;
  startDate: Date;
  endDate: Date;
  productList: ProductModel[];
  pyamentType: PaymentTypes;
  status: OrderStatuses;
  cutlery: number;
  delivery?: {
    courierId: number;
    price: number;
    startDate: Date;
    endDate: Date;
    comment?: string;
  };
}

export interface OrdersStateModel {
  list: OrderModel[];
  isLoading: boolean;
}
