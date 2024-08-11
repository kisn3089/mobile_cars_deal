import { CarInfoType } from "@/types/CarInfo.type";
import { TitleSection } from "../allCars/AllCars.style";
import { Center } from "./SpecialOffers.style";
import Carousel from "@/components/molecule/carousel/Carousel";
import CardInfoCar from "@/components/molecule/cardInfocar/CardInfoCar";

type SpecialOffersProps = {
  listSpecial: CarInfoType[];
  clickCardCar: (id: number) => void;
};

const SpecialOffers = ({ listSpecial, clickCardCar }: SpecialOffersProps) => {
  return (
    <>
      <TitleSection>특가 차량</TitleSection>
      <Center>
        <Carousel dataSize={listSpecial.length} gap={16}>
          {listSpecial.map((item, i) => (
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
