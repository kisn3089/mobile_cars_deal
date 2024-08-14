import { InputSearch, Relative, SvgSearch, SvgX } from "./SearchForm.style";

type SearchFormProps = {
  searchValue: string;
  onSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearchClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  onResetSearch: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const SearchForm = ({
  searchValue,
  onSearchValue,
  onSearchClick,
  onSearchEnter,
  onResetSearch,
}: SearchFormProps) => {
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
      {searchValue && (
        <SvgX
          src="/assets/icons/ic_xremove.svg"
          alt="serach"
          onClick={onResetSearch}
        />
      )}
    </Relative>
  );
};

export default SearchForm;
