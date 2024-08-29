import { useSearchParams } from "react-router-dom";
import { ItemFilter } from "../FilterControl.style";
import { OptionListLayout } from "../priceFilter/PriceFilter.style";
import { GetCarListSuspense } from "@/api/GetCarList";
import { filterTagsByCars } from "@/util/filterTagsByCars";

type TagsFilterProps = {
  onTags: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TagsFilter = ({ onTags }: TagsFilterProps) => {
  const [query] = useSearchParams();
  const isActive = query.get("tags");
  const { data: getListCar } = GetCarListSuspense();

  const tagsOption = filterTagsByCars(getListCar);

  return (
    <OptionListLayout>
      {tagsOption.map((tagsOption, i) => (
        <ItemFilter
          key={i}
          $isActive={isActive === tagsOption.value}
          onClick={onTags}
          value={tagsOption.value}>
          {tagsOption.label}
        </ItemFilter>
      ))}
    </OptionListLayout>
  );
};

export default TagsFilter;
