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
