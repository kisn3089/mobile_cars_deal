import { GetCarList, GetCarListSuspense } from "@/api/GetCarList";
import { useState } from "react";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import HasCars from "@/components/molecule/hasCars/HasCars";

const FetchMain = () => {
  const [page, setPage] = useState(1);
  /* 조금이라도 빨리 API 호출 하기 위해서 Suspense Query 사용 */
  const { data: getListCar } = GetCarListSuspense();
  const {
    // data: refetchListCar,
    refetch,
    isRefetching,
    isSuccess,
  } = GetCarList();
  const initListCar: any = [];

  const hasCar = Array.isArray(initListCar) && initListCar.length > 0;
  // const getListCar = hasCar ? initListCar : refetchListCar;
  // console.log("getListCar: ", getListCar);
  // console.log("refetchListCar: ", refetchListCar);

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
    <HasCars
      content={`차량 없습니다. \n다시 시도해보세요!`}
      has={isRefetching || isSuccess || hasCar}
      retry={refetch}>
      <SpecialOffers listSpecial={specialFilter} />
      <AllCars carList={sliceList} hasLoading={isRefetching} />
      <Footer
        requestMore={requestMore}
        disabled={!sliceList[0] || sliceList.length % LIMIT > 0}
      />
    </HasCars>
  );
};

export default FetchMain;
