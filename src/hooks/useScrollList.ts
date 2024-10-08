import { LIMIT } from "@/util/contstants";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const listFilter = ["search", "price", "tags", "sort"];

export const useScrollList = () => {
  const [selectId, setSelectId] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const [detailCarId, setDetailCarId] = useState<number | null>(null);
  const [query, setQuery] = useSearchParams();

  /* Observer 패턴 사용 */
  useEffect(() => {
    if (selectId) {
      const targetElement = `#${CSS.escape(selectId.toString())}`;
      const scrollY = document
        .querySelectorAll(targetElement)[1]
        .getBoundingClientRect().top;

      window.scrollTo({ top: scrollY, behavior: "smooth" });
      setSelectId(undefined);
    }
  }, [selectId, page]); /* 지켜보고 있다 */

  const requestMore = () => {
    setPage((prev) => prev + 1);
  };

  const clickCardCar = (id: number) => {
    setQuery((prev) => {
      listFilter.forEach((option) => {
        query.delete(option);
      });
      return prev;
    });
    const rangePage = page * LIMIT;
    if (rangePage < id) {
      setPage(parseInt((id / LIMIT).toString()) + 1);
    }
    setSelectId(id);
  };

  return { page, detailCarId, setDetailCarId, requestMore, clickCardCar };
};
