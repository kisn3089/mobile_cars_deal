import PriceFilter from "../priceFilter/PriceFilter";
import TagsFilter from "../tagsFilter/TagsFilter";
import SortFilter from "../sortFilter/SortFilter";
import { GetCarListSuspense } from "@/api/GetCarList";

type PickFilterItem = { price: string[]; tags: string[] };

type OpenSubFilterProps = {
  isOpenFilter: string | null;
  onSetFilter: (e: React.MouseEvent<HTMLButtonElement>, key: string) => void;
};

const OpenSubFilter = ({ isOpenFilter, onSetFilter }: OpenSubFilterProps) => {
  const { data: getListCar } = GetCarListSuspense();

  // const pickFilterItem = getListCar.reduce((acc, cur): PickFilterItem => {
  //   const originPrice = Math.floor(parseInt(cur.discount()));
  //   const toUnit =
  //     originPrice.toString().length === 1
  //       ? `${originPrice}000`
  //       : `${originPrice.toString().slice(0, 1)}00`;
  //   console.log(toUnit);
  //   if (acc.price.includes(toUnit)) return acc;
  // }, {} as PickFilterItem);

  if (isOpenFilter === "price")
    return <PriceFilter onPriceFilter={(e) => onSetFilter(e, "price")} />;
  if (isOpenFilter === "tags")
    return <TagsFilter onTags={(e) => onSetFilter(e, "tags")} />;
  if (isOpenFilter === "sort")
    return <SortFilter onSort={(e) => onSetFilter(e, "sort")} />;

  return null;
};

export default OpenSubFilter;
