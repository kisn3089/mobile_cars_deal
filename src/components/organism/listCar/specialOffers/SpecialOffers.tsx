import { TitleSection } from "../allCars/AllCars.style";
import { Center } from "./SpecialOffers.style";
import Carousel from "@/components/molecule/carousel/Carousel";
import CardInfoCar from "@/components/molecule/cardInfosCar/CardInfoCar";
import { useContext } from "react";
import { ListCarContext } from "../fetchCar/fetchCarContext";
import { GetCarListSuspense } from "@/api/GetCarList";
import { specialOnly } from "@/util/filteredListCar";

const SpecialOffers = () => {
  const { clickCardCar } = useContext(ListCarContext);
  const { data: getListCar } = GetCarListSuspense();
  const specialFilter = specialOnly(getListCar);

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
