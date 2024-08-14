import { useSearchParams } from "react-router-dom";
import { ItemFilter } from "../FilterControl.style";
import { OptionListLayout } from "./PriceFilter.style";

type PriceFilterProps = {
  onPriceFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const priceOptions = [
  { label: "10만 이상", value: "100" },
  { label: "20만 이상", value: "200" },
  { label: "30만 이상", value: "300" },
  { label: "40만 이상", value: "400" },
];

const PriceFilter = ({ onPriceFilter }: PriceFilterProps) => {
  const [query] = useSearchParams();
  const parsingPrice = query.get("price");

  return (
    <OptionListLayout>
      {priceOptions.map((priceOption, i) => (
        <ItemFilter
          key={i}
          $isActive={parsingPrice === priceOption.value}
          onClick={onPriceFilter}
          value={priceOption.value}>
          {priceOption.label}
        </ItemFilter>
      ))}
    </OptionListLayout>
  );
};

export default PriceFilter;
