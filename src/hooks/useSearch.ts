import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchValue, setSerachValue] = useState("");
  const navigator = useNavigate();
  const [query, setQuery] = useSearchParams();

  const onSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerachValue(e.target.value);
  };

  const onSearchClick = () => {
    console.log("qweq");

    if (searchValue) query.append("search", searchValue);
    // query.append("price", "200");

    navigator(`/list/query?${query.toString()}`);
  };

  const onSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    /* 중요한 깨달음... 한글로 Enter시 IME(Input Method Editor)가 자음과 모음을 하나의 음절로 연결하기 위해
        2번씩 렌더링 한다. */
    if (e.code === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onSearchClick();
    }
  };

  return { searchValue, onSearchValue, onSearchClick, onSearchEnter };
};
