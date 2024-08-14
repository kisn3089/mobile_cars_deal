import { defaultCarInfo } from "@/types/CarInfo.type";
import { createContext } from "react";

const defaultListCar = {
  getListCar: [defaultCarInfo],
  page: 1,
  detailCarId: null as number | null,
  searchValue: "",
  onSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setDetailCarId: (_id: number | null) => {},
  requestMore: () => {},
  clickCardCar: (_id: number) => {},
};

export type DefaultListCar = typeof defaultListCar;

export const ListCarContext = createContext<DefaultListCar>(defaultListCar);
