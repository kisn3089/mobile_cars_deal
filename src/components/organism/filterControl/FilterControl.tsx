import SearchForm from "@/components/molecule/searchForm/SearchForm";
import {
  FilterList,
  ItemFilter,
  Layout,
  PriceOptionList,
} from "./FilterControl.style";
import { useSearch } from "@/hooks/useSearch";

const FilterControl = () => {
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

  const currentUrl = window.location.search;
  const parsingPrice = currentUrl.split("price=")[1];

  return (
    <Layout>
      <SearchForm
        searchValue={searchValue}
        onSearchValue={onSearchValue}
        onSearchClick={onSearchClick}
        onSearchEnter={onSearchEnter}
      />
      <FilterList>
        <ItemFilter
          onClick={togglePrice}
          $isActive={currentUrl.includes("price")}>
          가격 👾
        </ItemFilter>
        <ItemFilter
          $isActive={currentUrl.includes("tags")}
          onClick={onPopular}
          value={"인기"}>
          인기 🧚
        </ItemFilter>
      </FilterList>
      {isOpenPrice && (
        <PriceOptionList>
          <ItemFilter
            $isActive={parsingPrice === "100"}
            onClick={onPriceFilter}
            value={"100"}>
            10만 이상
          </ItemFilter>
          <ItemFilter
            $isActive={parsingPrice === "150"}
            onClick={onPriceFilter}
            value={"150"}>
            15만 이상
          </ItemFilter>
          <ItemFilter
            $isActive={parsingPrice === "200"}
            onClick={onPriceFilter}
            value={"200"}>
            20만 이상
          </ItemFilter>
          <ItemFilter
            $isActive={parsingPrice === "250"}
            onClick={onPriceFilter}
            value={"250"}>
            25만 이상
          </ItemFilter>
        </PriceOptionList>
      )}
    </Layout>
  );
};

export default FilterControl;
