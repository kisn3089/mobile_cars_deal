import { CarInfoType } from "@/types/CarInfo.type";
import { TitleSection } from "../allCars/AllCars.style";
import { Center } from "./SpecialOffers.style";
import CardInfoCar from "@/components/molecule/cardInfoCar/CardInfoCar";
import Carousel from "@/components/molecule/carousel/Carousel";

type SpecialOffersProps = {
  listSpecial: CarInfoType[];
};

const SpecialOffers = ({ listSpecial }: SpecialOffersProps) => {
  return (
    <>
      <TitleSection>특가 차량</TitleSection>
      <Center>
        <Carousel dataSize={listSpecial.length} gap={16}>
          {listSpecial.map((item, i) => (
            <CardInfoCar key={i} listInfoCar={item} size="small" />
          ))}
        </Carousel>
      </Center>
    </>
  );
};

export default SpecialOffers;
