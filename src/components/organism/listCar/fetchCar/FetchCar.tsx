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
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "@/util/contstants";
import { filteredBySearch } from "@/util/filteredListCar";

const FetchMain = () => {
  const [query] = useSearchParams();
  const { page, detailCarId, setDetailCarId, requestMore, clickCardCar } =
    useScrollList();
  const { data: getListCar } = GetCarListSuspense();

  const filteredList = filteredBySearch({ getListCar, query });

  const filteredListCar = filteredList.slice(0, page * LIMIT);
  const totalPages = filteredList.length / LIMIT;

  const hasCar = Array.isArray(filteredListCar) && filteredListCar.length > 0;

  const contextValue: DefaultListCar = {
    page,
    detailCarId,
    totalPages,
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
