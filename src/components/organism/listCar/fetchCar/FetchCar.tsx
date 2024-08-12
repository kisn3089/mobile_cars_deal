import { GetCarListSuspense } from "@/api/GetCarList";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";
import { useScrollList } from "@/hooks/useScrollList";
import { createContext } from "react";
import { defaultCarInfo } from "@/types/CarInfo.type";
import MoreRequest from "@/components/atom/moreRequest/MoreRequest";
import CheckFirstChild from "@/components/molecule/checkFirstChild/CheckFirstChild";
import { Ment } from "@/components/molecule/checkFirstChild/checkLayout/CheckLayout.style";

const defaultListCar = {
  sliceList: [defaultCarInfo],
  page: 1,
  disabled: false,
  requestMore: () => {},
  clickCardCar: (_id: number) => {},
};

type DefaultListCar = typeof defaultListCar;

export const ListCarContext = createContext<DefaultListCar>(defaultListCar);

const FetchMain = () => {
  const { page, requestMore, clickCardCar } = useScrollList();
  const { data: getListCar } = GetCarListSuspense();
  // const getListCar: any[] = [];

  const hasCar = Array.isArray(getListCar) && getListCar.length > 0;
  // const hasCar = false;

  // const specialFilter = dummy.filter(
  const specialFilter =
    getListCar?.filter(
      (carItem) => carItem.carTypeTags.includes("특가")
      // &&
      //   carItem.carTypeTags.includes("인기")
    ) || [];

  const sliceList = getListCar?.slice(0, page * LIMIT) || [];
  const disabled = !sliceList[0] || sliceList.length % LIMIT > 0;

  const contextValue: DefaultListCar = {
    sliceList,
    page,
    disabled,
    requestMore,
    clickCardCar,
  };

  return (
    <ListCarContext.Provider value={contextValue}>
      <CheckFirstChild
        checkFor={hasCar}
        fallback={<Ment>{`현재 차량이 없습니다.`}</Ment>}>
        <SpecialOffers
          listSpecial={specialFilter}
          clickCardCar={clickCardCar}
        />
        <AllCars />
        <Footer>
          <MoreRequest>더보기</MoreRequest>
        </Footer>
      </CheckFirstChild>
    </ListCarContext.Provider>
  );
};

export default FetchMain;
