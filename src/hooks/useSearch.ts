import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchValue, setSerachValue] = useState("");
  const navigator = useNavigate();
  const [query] = useSearchParams();
  const [isOpenFilter, setIsOpenFilter] = useState<string | null>(() => {
    let keys = "";
    query.forEach((_, key) => {
      if (key === "price") {
        keys = key;
      } else if (key === "tags") {
        keys = key;
      } else if (key === "sort") {
        keys = key;
      }
    });
    return keys;
  });

  const onSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerachValue(e.target.value.toLocaleUpperCase());
  };

  const onResetSearch = () => setSerachValue("");

  const updateUrl = () => navigator(`/list/query?${query.toString()}`);

  const removeQuery = (key: string) => {
    query.delete(key);
    updateUrl();
  };

  const toggleQuery = (key: string, value: string) => {
    if (query.get(key) === value) {
      return removeQuery(key);
    }

    query.set(key, value);
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
      // (document.activeElement as HTMLElement).blur(); // mobile Enter시 키보드 닫히는 기능
      onSearchClick();
    }

    /* command + backspace로 검색값 초기화 */
    if ((e.metaKey || e.ctrlKey) && e.code === "Backspace") {
      onResetSearch();
    }
  };

  const changeOption = (key: string) =>
    setIsOpenFilter((prev) => (prev === key ? null : key));

  const onSetFilter = (e: React.MouseEvent<HTMLButtonElement>, key: string) =>
    toggleQuery(key, e.currentTarget.value);

  return {
    searchValue,
    isOpenFilter,
    onSearchValue,
    onSearchClick,
    onSearchEnter,
    changeOption,
    onSetFilter,
    onResetSearch,
  };
};
