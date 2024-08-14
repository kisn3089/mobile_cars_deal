import { useSearchParams } from "react-router-dom";
import { ItemFilter } from "../FilterControl.style";
import { OptionListLayout } from "../priceFilter/PriceFilter.style";

type TagsFilterProps = {
  onTags: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const tagsOptions = [
  { label: "인기", value: "인기" },
  { label: "프리미엄", value: "프리미엄" },
  { label: "신차급", value: "신차급" },
  { label: "빠른대여", value: "빠른대여" },
];

const TagsFilter = ({ onTags }: TagsFilterProps) => {
  const [query] = useSearchParams();
  const isActive = query.get("tags");
  return (
    <OptionListLayout>
      {tagsOptions.map((tagsOption, i) => (
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
