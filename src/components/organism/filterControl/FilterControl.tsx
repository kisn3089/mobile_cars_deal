import SearchForm from "@/components/molecule/searchForm/SearchForm";
import { FilterList, ItemFilter, Layout } from "./FilterControl.style";
import { useSearch } from "@/hooks/useSearch";

const FilterControl = () => {
  const {
    searchValue,
    isOpenPrice,
    onSearchValue,
    onSearchClick,
    onSearchEnter,
  } = useSearch();

  const currentUrl = window.location.search;

  return (
    <Layout>
      <SearchForm
        searchValue={searchValue}
        onSearchValue={onSearchValue}
        onSearchClick={onSearchClick}
        onSearchEnter={onSearchEnter}
      />
      <FilterList>
        <ItemFilter className={currentUrl.includes("price") ? "price" : ""}>
          가격
        </ItemFilter>
        <ItemFilter className={currentUrl.includes("tags") ? "tags" : ""}>
          인기
        </ItemFilter>
      </FilterList>
    </Layout>
  );
};

export default FilterControl;
