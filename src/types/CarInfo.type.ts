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

export type CarInfoWithPrice = CarInfoType & CalcPriceType;

export const defaultCarInfo = {
  carClassId: 0,
  carClassName: "",
  carModel: "",
  carTypeTags: [""],
  discountPercent: 0,
  drivingDistance: 0,
  image: "",
  price: 0,
  regionGroups: [""],
  year: 0,
};
