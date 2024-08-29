import SearchForm from "@/components/molecule/searchForm/SearchForm";
import { FilterList, ItemFilter, Layout } from "./FilterControl.style";
import { useSearch } from "@/hooks/useSearch";
import { useSearchParams } from "react-router-dom";
import OpenSubFilter from "./openSubFilter/OpenSubFilter";

const FilterControl = () => {
  const [query] = useSearchParams();
  const {
    searchValue,
    isOpenFilter,
    onSearchValue,
    onSearchClick,
    onSearchEnter,
    changeOption,
    onSetFilter,
    onResetSearch,
  } = useSearch();

  const listFilter = [
    {
      label: "가격 👾",
      value: "가격",
      key: "price",
      isActive: !!query.get("price") || isOpenFilter === "price",
    },
    {
      label: "태그 🧚",
      value: "태그",
      key: "tags",
      isActive: !!query.get("tags") || isOpenFilter === "tags",
    },
    {
      label: "가격 정렬 🧬",
      value: "정렬",
      key: "sort",
      isActive: !!query.get("sort") || isOpenFilter === "sort",
    },
  ];

  return (
    <Layout>
      <SearchForm
        searchValue={searchValue}
        onSearchValue={onSearchValue}
        onSearchClick={onSearchClick}
        onSearchEnter={onSearchEnter}
        onResetSearch={onResetSearch}
      />
      <FilterList>
        {listFilter.map((filterOption, i) => (
          <ItemFilter
            key={i}
            $isActive={filterOption.isActive}
            onClick={() => changeOption(filterOption.key)}
            value={filterOption.value}>
            {filterOption.label}
          </ItemFilter>
        ))}
      </FilterList>
      <OpenSubFilter isOpenFilter={isOpenFilter} onSetFilter={onSetFilter} />
    </Layout>
  );
};

export default FilterControl;
