import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchValue, setSerachValue] = useState("");
  const navigator = useNavigate();
  const [query, setQuery] = useSearchParams();
  const [isOpenPrice, setIsOpenPrice] = useState<string | null>(
    query.get("price")
  );

  const onSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerachValue(e.target.value);
  };

  const updateUrl = () => navigator(`/list/query?${query.toString()}`);

  const removeQuery = (key: string) => {
    query.delete(key);
    updateUrl();
  };

  const onSearchClick = () => {
    if (searchValue === "") {
      return removeQuery("search");
    }

    query.set("search", searchValue);
    updateUrl();
  };

  const onSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    /* 중요한 깨달음... 한글로 Enter시 IME(Input Method Editor)가 자음과 모음을 하나의 음절로 연결하기 위해
        2번씩 렌더링 한다. */
    if (e.code === "Enter" && !e.nativeEvent.isComposing) {
      onSearchClick();
    }
  };

  const togglePrice = () =>
    setIsOpenPrice((prev) => (prev === null ? "open" : null));

  const onPriceFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    if (query.get("price") === value) {
      return removeQuery("price");
    }

    query.set("price", value);
    updateUrl();
  };

  const onPopular = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    if (query.get("tags") === value) {
      return removeQuery("tags");
    }

    query.set("tags", value);
    updateUrl();
  };

  return {
    searchValue,
    isOpenPrice,
    onSearchValue,
    onSearchClick,
    onSearchEnter,
    togglePrice,
    onPriceFilter,
    onPopular,
  };
};
