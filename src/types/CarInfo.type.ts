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

export const SkeletonCarInfo = {
  carClassId: 0,
  carClassName: "아반떼",
  carModel: "준중형",
  carTypeTags: ["쏘카나도가고싶다"],
  discountPercent: 35,
  drivingDistance: 150000,
  image: "",
  price: 321220,
  regionGroups: ["서울/인천/경기"],
  year: 2021,
};
