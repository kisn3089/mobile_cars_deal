import { CarInfoWithPrice } from "@/types/CarInfo.type";
import { Car } from "./method/carInfoMethod";
import { filterKeyType } from "@/types/filterKey.type";

type FilteredListCarProps = {
  getListCar: CarInfoWithPrice[];
  filterKey: filterKeyType;
};

export const filteredBySearch = ({
  getListCar,
  filterKey,
}: FilteredListCarProps) => {
  const { search, price, sort, tags } = filterKey;
  return getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    const car = new Car(cur);

    const filterPrice = price ? parseInt(car.discount()) >= +price : true;
    const filterSearch = search ? car.carClassName.includes(search) : true;
    const filterTags = tags ? car.carTypeTags.includes(tags) : true;

    if (filterPrice && filterSearch && filterTags) {
      return [...acc, car];
    }

    return acc;
  }, []);
};

export const specialOnly = (getListCar: CarInfoWithPrice[]) =>
  getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    const car = new Car(cur);
    if (car.carTypeTags.includes("특가")) return [...acc, car];
    return acc;
  }, []);
