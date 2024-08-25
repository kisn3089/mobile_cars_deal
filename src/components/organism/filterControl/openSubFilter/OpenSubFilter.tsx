import PriceFilter from "../priceFilter/PriceFilter";
import TagsFilter from "../tagsFilter/TagsFilter";
import SortFilter from "../sortFilter/SortFilter";
import { GetCarListSuspense } from "@/api/GetCarList";

type OpenSubFilterProps = {
  isOpenFilter: string | null;
  onSetFilter: (e: React.MouseEvent<HTMLButtonElement>, key: string) => void;
};

const OpenSubFilter = ({ isOpenFilter, onSetFilter }: OpenSubFilterProps) => {
  const { data: getListCar, isSuccess } = GetCarListSuspense();
  if (isSuccess) console.log(getListCar);

  if (isOpenFilter === "price")
    return <PriceFilter onPriceFilter={(e) => onSetFilter(e, "price")} />;
  if (isOpenFilter === "tags")
    return <TagsFilter onTags={(e) => onSetFilter(e, "tags")} />;
  if (isOpenFilter === "sort")
    return <SortFilter onSort={(e) => onSetFilter(e, "sort")} />;

  return null;
};

export default OpenSubFilter;
