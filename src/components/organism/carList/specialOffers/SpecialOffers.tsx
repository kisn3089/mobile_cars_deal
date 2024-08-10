import { CarInfoType } from "@/types/CarInfo.type";
import { TitleSection } from "../allCars/AllCars.style";
import { Carousel, Center, Wrapper } from "./SpecialOffers.style";
import CardInfoCar from "@/components/molecule/CardInfocar/CardInfoCar";
import { useDragCarousel } from "@/hooks/useDragEvent";

type SpecialOffersProps = {
  listSpecial: CarInfoType[];
};

const SpecialOffers = ({ listSpecial }: SpecialOffersProps) => {
  const { carouselRef, currentIndex, transX, carouselSize, dragEvent } =
    useDragCarousel(listSpecial.length);
  return (
    <>
      <TitleSection>특가 차량</TitleSection>
      <Center>
        <Carousel ref={carouselRef}>
          <Wrapper
            $currentIndex={currentIndex}
            $width={carouselSize}
            $transX={transX}
            $leng={listSpecial.length}
            onMouseDown={dragEvent}>
            {listSpecial.map((item, i) => (
              <CardInfoCar key={i} listInfoCar={item} />
            ))}
          </Wrapper>
        </Carousel>
      </Center>
    </>
  );
};

export default SpecialOffers;
