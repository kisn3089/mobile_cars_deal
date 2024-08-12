import { GetCarListSuspense } from "@/api/GetCarList";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import { useScrollList } from "@/hooks/useScrollList";
import { createContext } from "react";
import { defaultCarInfo } from "@/types/CarInfo.type";
import MoreRequest from "@/components/atom/moreRequest/MoreRequest";
import { Ment } from "@/components/molecule/check/checkLayout/CheckLayout.style";
import Check from "@/components/molecule/check/Check";

const defaultListCar = {
  getListCar: [defaultCarInfo],
  page: 1,
  requestMore: () => {},
  clickCardCar: (_id: number) => {},
};

type DefaultListCar = typeof defaultListCar;

export const ListCarContext = createContext<DefaultListCar>(defaultListCar);

const FetchMain = () => {
  const { page, requestMore, clickCardCar } = useScrollList();
  const { data: getListCar } = GetCarListSuspense();

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;

  const contextValue: DefaultListCar = {
    getListCar,
    page,
    requestMore,
    clickCardCar,
  };

  return (
    <ListCarContext.Provider value={contextValue}>
      <Check
        checkFor={hasCar}
        fallback={<Ment>{`현재 차량이 없습니다.`}</Ment>}>
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
