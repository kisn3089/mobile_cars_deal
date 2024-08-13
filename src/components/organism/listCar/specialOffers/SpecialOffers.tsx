import { CarInfoType } from "@/types/CarInfo.type";
import { TitleSection } from "../allCars/AllCars.style";
import { Center } from "./SpecialOffers.style";
import Carousel from "@/components/molecule/carousel/Carousel";
import CardInfoCar from "@/components/molecule/cardInfocar/CardInfoCar";
import { useContext } from "react";
import { ListCarContext } from "../fetchCar/fetchCarContext";

const SpecialOffers = () => {
  const { getListCar, clickCardCar } = useContext(ListCarContext);

  const specialFilter =
    getListCar?.filter(
      (carItem: CarInfoType) => carItem.carTypeTags.includes("특가")
      // &&
      //   carItem.carTypeTags.includes("인기")
    ) || [];

  return (
    <>
      <TitleSection>특가 차량</TitleSection>
      <Center>
        <Carousel dataSize={specialFilter.length} gap={16}>
          {specialFilter.map((item, i) => (
            <CardInfoCar
              key={i}
              listInfoCar={item}
              size="small"
              clickCardCar={clickCardCar}
            />
          ))}
        </Carousel>
      </Center>
    </>
  );
};

export default SpecialOffers;
