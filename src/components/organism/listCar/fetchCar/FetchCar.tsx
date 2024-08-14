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
import { CarInfoType, CarInfoWithPrice } from "@/types/CarInfo.type";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "@/util/contstants";
import { Car } from "@/util/method/carInfoMethod";

type filterKeyType = {
  search?: string; // includes
  price?: string; // up
  tags?: string; // filter
  sort?: string; // sort
};

const FetchMain = () => {
  const { page, detailCarId, setDetailCarId, requestMore, clickCardCar } =
    useScrollList();
  const { data: getListCar } = GetCarListSuspense();

  const specialFilter = getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    const car = new Car(cur);
    if (car.carTypeTags.includes("특가")) return [...acc, car];
    return acc;
  }, []);

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;

  const [query] = useSearchParams();

  const filterKey: filterKeyType = {};

  query.forEach((value, key) => {
    // console.log(key, value);
    Object.assign(filterKey, { [key]: value });
  });
  // console.log(filterKey);
  const { search, price, sort, tags } = filterKey;

  const filteredList = getListCar.reduce<CarInfoWithPrice[]>((acc, cur) => {
    const car = new Car(cur);

    const filterPrice = price ? parseInt(car.discount()) >= +price : true;
    const filterSearch = search ? car.carClassName.includes(search) : true;

    if (filterPrice && filterSearch) {
      return [...acc, car];
    }

    return acc;
  }, []);

  const filteredListCar = filteredList.slice(0, page * LIMIT);
  const totalPages = filteredList.length / LIMIT;

  console.log("filteredListCar: ", filteredListCar);

  const contextValue: DefaultListCar = {
    filteredListCar,
    specialFilter,
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
