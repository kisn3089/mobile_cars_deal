import SearchForm from "@/components/molecule/searchForm/SearchForm";
import { FilterList, ItemFilter, Layout } from "./FilterControl.style";
import { useSearch } from "@/hooks/useSearch";
import PriceFilter from "./priceFilter/PriceFilter";
import { useSearchParams } from "react-router-dom";

const FilterControl = () => {
  const [query] = useSearchParams();
  const {
    searchValue,
    isOpenPrice,
    onSearchValue,
    onSearchClick,
    onSearchEnter,
    togglePrice,
    onPriceFilter,
    onPopular,
  } = useSearch();

  const listFilter = [
    {
      label: "가격 👾",
      value: "가격",
      isActive: !!query.get("price") || isOpenPrice !== null,
      onClick: togglePrice,
    },
    {
      label: "인기 🧚",
      value: "인기",
      isActive: !!query.get("tags"),
      onClick: onPopular,
    },
  ];

  return (
    <Layout>
      <SearchForm
        searchValue={searchValue}
        onSearchValue={onSearchValue}
        onSearchClick={onSearchClick}
        onSearchEnter={onSearchEnter}
      />
      <FilterList>
        {listFilter.map((filterOption, i) => (
          <ItemFilter
            key={i}
            $isActive={filterOption.isActive}
            onClick={filterOption.onClick}
            value={filterOption.value}>
            {filterOption.label}
          </ItemFilter>
        ))}
      </FilterList>
      {isOpenPrice && <PriceFilter onPriceFilter={onPriceFilter} />}
    </Layout>
  );
};

export default FilterControl;
