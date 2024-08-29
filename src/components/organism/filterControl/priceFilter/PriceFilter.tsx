import { useSearchParams } from "react-router-dom";
import { ItemFilter } from "../FilterControl.style";
import { OptionListLayout } from "./PriceFilter.style";
import { GetCarListSuspense } from "@/api/GetCarList";
import { pickPriceRange } from "@/util/filterPriceByCars";

type PriceFilterProps = {
  onPriceFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const PriceFilter = ({ onPriceFilter }: PriceFilterProps) => {
  const [query] = useSearchParams();
  const parsingPrice = query.get("price");
  const { data: getListCar } = GetCarListSuspense();

  const listPriceRange = pickPriceRange(getListCar);

  return (
    <OptionListLayout>
      {listPriceRange.map((priceOption, i) => (
        <ItemFilter
          key={i}
          $isActive={parsingPrice === priceOption.value.toString()}
          onClick={onPriceFilter}
          value={priceOption.value}>
          {priceOption.label}
        </ItemFilter>
      ))}
    </OptionListLayout>
  );
};

export default PriceFilter;
