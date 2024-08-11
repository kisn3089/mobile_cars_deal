import { CarInfoType } from "@/types/CarInfo.type";
import { TitleSection } from "../allCars/AllCars.style";
import { Center } from "./SpecialOffers.style";
import CardInfoCar from "@/components/molecule/cardInfoCar/CardInfoCar";
import Carousel from "@/components/molecule/carousel/Carousel";
import { Link } from "react-router-dom";

type SpecialOffersProps = {
  listSpecial: CarInfoType[];
};

const SpecialOffers = ({ listSpecial }: SpecialOffersProps) => {
  const click = (id: number) => {
    console.log("offers: ", id);

    // console.log("listSpecial: ", listSpecial);

    // console.log(id);

    // const scrollY = ref?.getBoundingClientRect().top;
    // console.log(ref?.getBoundingClientRect());
    // window.scrollTo({ top: scrollY, behavior: "smooth" });
  };

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
              click={click}
            />
          ))}
        </Carousel>
      </Center>
    </>
  );
};

export default SpecialOffers;
