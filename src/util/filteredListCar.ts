import { CarInfoWithPrice } from "@/types/CarInfo.type";
import { Car } from "./method/carInfoMethod";
import { filterKeyType } from "@/types/filterKey.type";

type FilteredListCarProps = {
  getListCar: CarInfoWithPrice[];
  query: URLSearchParams;
};

export const filteredBySearch = ({
  getListCar,
  query,
}: FilteredListCarProps) => {
  const filterKey: filterKeyType = {};

  query.forEach((value, key) => {
    Object.assign(filterKey, { [key]: value });
  });

  const { search, price, sort, tags } = filterKey;
  const filter = getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    const car = new Car(cur);

    const filterPrice = price ? parseInt(car.discount()) >= +price : true;
    const filterSearch = search ? car.carClassName.includes(search) : true;
    const filterTags = tags ? car.carTypeTags.includes(tags) : true;

    if (filterPrice && filterSearch && filterTags) {
      return [...acc, car];
    }

    return acc;
  }, []);

  if (sort && filter)
    return filter.sort((a, b) =>
      sort === "up"
        ? parseInt(b.discount()) - parseInt(a.discount())
        : parseInt(a.discount()) - parseInt(b.discount())
    );
  return filter;
};

export const specialOnly = (getListCar: CarInfoWithPrice[]) =>
  getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    const car = new Car(cur);
    if (car.carTypeTags.includes("특가")) return [...acc, car];
    return acc;
  }, []);
