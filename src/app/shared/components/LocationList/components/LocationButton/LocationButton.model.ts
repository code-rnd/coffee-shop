import { LocationModel } from "../../../../../store/coordinates/coordinates.model";

export interface LocationButtonModel {
  location?: LocationModel;
  id: number;
  activeButtonId: number;
  setActiveButton: (id: number) => void;
}
