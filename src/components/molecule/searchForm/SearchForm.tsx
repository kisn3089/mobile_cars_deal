import { InputSearch, Relative, SvgSearch } from "./SearchForm.style";
import { useSearch } from "@/hooks/useSearch";

const SearchForm = () => {
  const { searchValue, onSearchValue, onSearchClick, onSearchEnter } =
    useSearch();

  return (
    <Relative>
      <InputSearch
        value={searchValue}
        onChange={onSearchValue}
        placeholder="차량을 검색해보세요! 🚙"
        onKeyDown={onSearchEnter}
      />
      <SvgSearch
        src="/assets/icons/ic_search.svg"
        alt="serach"
        onClick={onSearchClick}
      />
    </Relative>
  );
};

export default SearchForm;
