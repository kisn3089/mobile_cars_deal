export type CarInfoType = {
  carClassId: number;
  carClassName: string;
  carModel: string;
  carTypeTags: string[];
  discountPercent: number;
  drivingDistance: number;
  image: string;
  price: number;
  regionGroups: string[];
  year: number;
};

export type CalcPriceType = {
  round(value?: number): string;
  driveFormat(): string;
  discount(): string;
};

export type CarDetailType = CarInfoType & CalcPriceType;

export const defaultCarInfo = {
  carClassId: 0,
  carClassName: "아반떼",
  carModel: "준중형",
  carTypeTags: ["매직"],
  discountPercent: 0,
  drivingDistance: 0,
  image: "",
  price: 32120,
  regionGroups: ["서울"],
  year: 2021,
};
