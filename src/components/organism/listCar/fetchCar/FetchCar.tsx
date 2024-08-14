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
import SearchForm from "@/components/molecule/searchForm/SearchForm";
import { useFilter } from "@/hooks/useFilter";

const FetchMain = () => {
  const { page, detailCarId, setDetailCarId, requestMore, clickCardCar } =
    useScrollList();
  const { searchValue, onSearchValue } = useFilter();
  const { data: getListCar } = GetCarListSuspense();

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;

  const contextValue: DefaultListCar = {
    getListCar,
    page,
    detailCarId,
    searchValue,
    onSearchValue,
    setDetailCarId,
    requestMore,
    clickCardCar,
  };

  return (
    <ListCarContext.Provider value={contextValue}>
      <SearchForm />
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
