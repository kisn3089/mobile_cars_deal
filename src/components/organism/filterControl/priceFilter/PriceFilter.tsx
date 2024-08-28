import { useSearchParams } from "react-router-dom";
import { ItemFilter } from "../FilterControl.style";
import { OptionListLayout } from "./PriceFilter.style";
import { GetCarListSuspense } from "@/api/GetCarList";

type PickPriceRangeType = { label: string; value: number };

type PriceFilterProps = {
  onPriceFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const PriceFilter = ({ onPriceFilter }: PriceFilterProps) => {
  const [query] = useSearchParams();
  const parsingPrice = query.get("price");
  const { data: getListCar } = GetCarListSuspense();

  const pickPriceRange = getListCar
    .reduce<PickPriceRangeType[]>((acc, cur) => {
      const originPrice = Math.floor(parseInt(cur.discount()));

      const toUnit =
        originPrice.toString().length === 1
          ? `${originPrice}000`
          : `${originPrice.toString().slice(0, 1)}00`;
      if (!acc.find((origin) => origin.value === +toUnit))
        return [...acc, { label: `${+toUnit / 10}만 이상`, value: +toUnit }];

      return acc;
    }, [] as PickPriceRangeType[])
    .sort((a, b) => a.value - b.value);

  return (
    <OptionListLayout>
      {pickPriceRange.map((priceOption, i) => (
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
