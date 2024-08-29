import { CarInfoWithPrice } from "@/types/CarInfo.type";

export const filterTagsByCars = (getListCar: CarInfoWithPrice[]) => {
  const listTags = getListCar.reduce<string[]>(
    (acc, cur) => [...acc, ...cur.carTypeTags],
    []
  );
  const toUnique = new Set(listTags);
  const tagsOption = [...toUnique].map((option) => ({
    label: option,
    value: option,
  }));

  return tagsOption;
};
