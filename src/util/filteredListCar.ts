import { CarInfoWithPrice } from "@/types/CarInfo.type";
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
    const filterPrice = price
      ? toNumber(cur.discount()) / 1000 >= +price
      : true;
    const filterSearch = search ? cur.carClassName.includes(search) : true;
    const filterTags = tags ? cur.carTypeTags.includes(tags) : true;

    if (filterPrice && filterSearch && filterTags) {
      return [...acc, cur];
    }

    return acc;
  }, []);

  if (sort && filter)
    return filter.sort((a, b) =>
      sort === "up"
        ? toNumber(b.discount()) - toNumber(a.discount())
        : toNumber(a.discount()) - toNumber(b.discount())
    );
  return filter;
};

export const specialOnly = (getListCar: CarInfoWithPrice[]) =>
  getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    if (cur.carTypeTags.includes("특가")) return [...acc, cur];
    return acc;
  }, []);

export const toNumber = (price: string) => parseInt(price.replace(/,/g, ""));
