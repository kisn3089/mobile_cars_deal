import { CarInfoType } from "@/types/CarInfo.type";

export class Car {
  carClassId: number;
  carClassName: string;
  carModel: string;
  carTypeTags: ("특가" | "인기")[];
  discountPercent: number;
  drivingDistance: number;
  image: string;
  price: number;
  regionGroups: string[];
  year: number;

  constructor(carInfo: CarInfoType) {
    this.carClassId = carInfo.carClassId;
    this.carClassName = carInfo.carClassName;
    this.carModel = carInfo.carModel;
    this.carTypeTags = carInfo.carTypeTags;
    this.discountPercent = carInfo.discountPercent;
    this.drivingDistance = carInfo.drivingDistance;
    this.image = carInfo.image;
    this.price = carInfo.price;
    this.regionGroups = carInfo.regionGroups;
    this.year = carInfo.year;
  }

  // price를 반올림해서 반환하는 메서드
  round() {
    const base = Math.pow(10, 2);
    return (Math.round(this.price / base) * base).toLocaleString("ko-KR");
  }

  //   shortDriveUnit() {

  //   }
}
