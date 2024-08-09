import { CarInfoType } from "@/types/CarInfo.type";

export class Car {
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

  /* price를 100자리에서 반올림해서 반환하는 메서드 ( 원화기준으로 콤마 ) */
  round(): string {
    const base = Math.pow(10, 2);
    return (Math.round(this.price / base) * base).toLocaleString("ko-KR");
  }

  driveFormat(): string {
    const baseUnit = "km";
    const leng = this.drivingDistance.toString().length;

    /* 값이 1000보다 작으면 km만 붙여서 반환 */
    if (leng < 4) return `${this.drivingDistance}${baseUnit}`;

    let divideValue = 1000;
    let unit = "천";

    if (leng !== 4) {
      divideValue = 10000;
      unit = "만";
    }

    /* 앞에 단위 구하는 식 */
    const primaryValue = Math.floor(this.drivingDistance / divideValue);
    /* 뒤에 단위 구하는 식 */
    const subValue = String(this.drivingDistance % divideValue)[0];
    /* km 단위 위치할 자리 */
    const subUnit =
      subValue === "0" ? `${baseUnit}` : ` ${subValue}천${baseUnit}`;

    return `${primaryValue}${unit}${subUnit}`;
  }
}
