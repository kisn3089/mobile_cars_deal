import { InputSearch, Relative, SvgSearch } from "./SearchForm.style";

type SearchFormProps = {
  searchValue: string;
  onSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearchClick: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const SearchForm = ({
  searchValue,
  onSearchValue,
  onSearchClick,
  onSearchEnter,
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
    </Relative>
  );
};

export default SearchForm;
