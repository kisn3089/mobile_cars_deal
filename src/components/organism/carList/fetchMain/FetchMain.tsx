import { GetCarListSuspense } from "@/api/GetCarList";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import Check from "@/components/molecule/check/Check";

const FetchMain = () => {
  const [select, setSelect] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const { data: getListCar } = GetCarListSuspense();
  // const getListCar: any[] = [];

  useEffect(() => {
    if (select) {
      const t = `#${CSS.escape(select.toString())}`;
      const scrollY = document
        .querySelectorAll(t)[1]
        .getBoundingClientRect().top;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
      setSelect(undefined);
    }
  }, [select, page]);

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;

  const requestMore = () => {
    setPage((prev) => prev + 1);
  };

  // const specialFilter = dummy.filter(
  const specialFilter =
    getListCar?.filter(
      (carItem: any) => carItem.carTypeTags.includes("특가")
      // &&
      //   carItem.carTypeTags.includes("인기")
    ) || [];

  const sliceList = getListCar?.slice(0, page * LIMIT) || [];

  const clickCardCar = (id: number) => {
    const rangePage = page * LIMIT;
    if (rangePage < id) {
      setPage(parseInt((id / LIMIT).toString()) + 1);
    }
    setSelect(id);
  };

  return (
    <Check
      ment={`차량 없습니다.`}
      checkFor={hasCar}
      svgPath="/assets/ic_retry.svg">
      <SpecialOffers listSpecial={specialFilter} clickCardCar={clickCardCar} />
      <AllCars carList={sliceList} />
      <Footer
        requestMore={requestMore}
        disabled={!sliceList[0] || sliceList.length % LIMIT > 0}
      />
    </Check>
  );
};

export default FetchMain;
