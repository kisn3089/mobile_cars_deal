import { useSearchParams } from "react-router-dom";
import { ItemFilter } from "../FilterControl.style";
import { OptionListLayout } from "../priceFilter/PriceFilter.style";

type SortFilterProps = {
  onSort: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const sortOptions = [
  { label: "낮은순", value: "down" },
  { label: "높은순", value: "up" },
];

const SortFilter = ({ onSort }: SortFilterProps) => {
  const [query] = useSearchParams();
  const isActive = query.get("sort");

  return (
    <OptionListLayout>
      {sortOptions.map((sortOption, i) => (
        <ItemFilter
          key={i}
          $isActive={isActive === sortOption.value}
          onClick={onSort}
          value={sortOption.value}>
          {sortOption.label}
        </ItemFilter>
      ))}
    </OptionListLayout>
  );
};

export default SortFilter;
