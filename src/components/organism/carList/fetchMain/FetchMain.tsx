import { GetCarListSuspense } from "@/api/GetCarList";
import { useState } from "react";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import Check from "@/components/molecule/check/Check";

const FetchMain = () => {
  const [page, setPage] = useState(1);
  /* 조금이라도 빨리 API 호출 하기 위해서 Suspense Query 사용 */
  const { data: getListCars } = GetCarListSuspense();
  const getListCar: any[] = [];

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

  return (
    <Check
      ment={`차량 없습니다.`}
      checkFor={hasCar}
      svgPath="/assets/ic_retry.svg">
      <SpecialOffers listSpecial={specialFilter} />
      <AllCars carList={sliceList} />
      <Footer
        requestMore={requestMore}
        disabled={!sliceList[0] || sliceList.length % LIMIT > 0}
      />
    </Check>
  );
};

export default FetchMain;
