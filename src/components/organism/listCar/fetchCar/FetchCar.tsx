import { GetCarListSuspense } from "@/api/GetCarList";
import Footer from "../footer/Footer";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import { useScrollList } from "@/hooks/useScrollList";
import MoreRequest from "@/components/atom/moreRequest/MoreRequest";
import Check from "@/components/molecule/check/Check";
import { DefaultListCar, ListCarContext } from "./fetchCarContext";
import {
  Ment,
  NoCar,
} from "@/components/core/failWithRetry/FailWithRetry.style";

const FetchMain = () => {
  const { page, detailCarId, setDetailCarId, requestMore, clickCardCar } =
    useScrollList();
  const { data: getListCar } = GetCarListSuspense();

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;

  const contextValue: DefaultListCar = {
    getListCar,
    page,
    detailCarId,
    setDetailCarId,
    requestMore,
    clickCardCar,
  };

  return (
    <ListCarContext.Provider value={contextValue}>
      <Check
        checkFor={hasCar}
        fallback={
          <>
            <Ment>{`현재 차량이 없습니다.`}</Ment>
            <NoCar src="/assets/img/blue_car.webp" />
          </>
        }>
        <SpecialOffers />
        <AllCars />
        <Footer>
          <MoreRequest>더보기</MoreRequest>
        </Footer>
      </Check>
    </ListCarContext.Provider>
  );
};

export default FetchMain;
