import { useContext } from "react";
import { InputSearch, Relative, SvgSearch } from "./SearchForm.style";
import { ListCarContext } from "@/components/organism/listCar/fetchCar/fetchCarContext";

const SearchForm = () => {
  const { searchValue, onSearchValue } = useContext(ListCarContext);

  return (
    <Relative>
      <InputSearch
        value={searchValue}
        onChange={onSearchValue}
        placeholder="차량을 검색해보세요! 🚙"
      />
      <SvgSearch src="/assets/icons/ic_search.svg" alt="serach" />
    </Relative>
  );
};

export default SearchForm;
