import SearchForm from "@/components/molecule/searchForm/SearchForm";
import { FilterList, ItemFilter, Layout } from "./FilterControl.style";

const FilterControl = () => {
  return (
    <Layout>
      <SearchForm />
      <FilterList>
        <ItemFilter>가격</ItemFilter>
      </FilterList>
    </Layout>
  );
};

export default FilterControl;
