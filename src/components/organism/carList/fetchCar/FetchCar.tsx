import { GetCarListSuspense } from "@/api/GetCarList";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import Check from "@/components/molecule/check/Check";
import { useFetchListCar } from "@/hooks/useFetchListCar";

const FetchMain = () => {
  const { page, requestMore, clickCardCar } = useFetchListCar();
  const { data: getListCar } = GetCarListSuspense();
  // const getListCar: any[] = [];

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;

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
