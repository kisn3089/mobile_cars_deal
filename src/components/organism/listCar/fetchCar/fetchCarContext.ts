import { createContext } from "react";

const defaultListCar = {
  page: 1,
  detailCarId: null as number | null,
  totalPages: 0,
  setDetailCarId: (_id: number | null) => {},
  requestMore: () => {},
  clickCardCar: (_id: number) => {},
};

export type DefaultListCar = typeof defaultListCar;

export const ListCarContext = createContext<DefaultListCar>(defaultListCar);
