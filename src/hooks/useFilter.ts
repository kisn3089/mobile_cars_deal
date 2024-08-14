import { useState } from "react";

export const useFilter = () => {
  const [searchValue, setSerachValue] = useState("");
  const onSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerachValue(e.target.value);
  };

  return { searchValue, onSearchValue };
};
