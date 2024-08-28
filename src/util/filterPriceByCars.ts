import { CarInfoWithPrice } from "@/types/CarInfo.type";
import { toNumber } from "./filteredListCar";

export const pickPriceRange = (getListCar: CarInfoWithPrice[]) => {
  const listPrice = getListCar.reduce<number[]>((acc, cur) => {
    const toPrice = toNumber(cur.discount());
    const toLeading = Math.floor(toPrice / 100000);

    return [...acc, +`${toLeading}00`];
  }, []);

  const toUnique = new Set(listPrice);
  const priceOption = [...toUnique]
    .sort((a, b) => a - b)
    .map((price) => ({ label: `${price / 10}만 이상`, value: price }));

  return priceOption;
};
