import { CarInfoType } from "@/types/CarInfo.type";
import { TitleSection } from "../allCars/AllCars.style";
import { Carousel, CarouselItem, Center, Wrapper } from "./SpecialOffers.style";
import CardInfoCar from "@/components/molecule/CardInfocar/CardInfoCar";
import { useEffect, useRef, useState } from "react";
import { registDragEvent } from "@/util/dragEvent";

const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

type SpecialOffersProps = {
  listSpecial: CarInfoType[];
};

const SpecialOffers = ({ listSpecial }: SpecialOffersProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setCarouselSize] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;
    const carouselRect = carouselRef.current.getBoundingClientRect();

    setCarouselSize(carouselRect.width + 10);
  }, [carouselRef]);

  /* Drag event ->  */
  const handleDragChange = (deltaX: number) => {
    console.log("delta: ", deltaX);

    setTransX(inrange(deltaX, -width, width));
  };

  const handleDragEnd = (deltaX: number) => {
    const maxIndex = listSpecial.length - 1;
    if (deltaX < -170) setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
    if (deltaX > 170) setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

    setTransX(0);
  };

  return (
    <>
      <TitleSection>특가 차량</TitleSection>
      <Center>
        <Carousel ref={carouselRef} className="carousel">
          <Wrapper
            className="wrapper"
            $currentIndex={currentIndex}
            $width={width}
            $transX={transX}
            $leng={listSpecial.length}
            // onMouseMove={registDragEvent({})}
            {...registDragEvent({
              onDragChange: (deltaX) => handleDragChange(deltaX),
              onDragEnd: (deltaX) => handleDragEnd(deltaX),
            })}>
            {listSpecial.map((item, i) => (
              // <CarouselItem className="item" key={i} $currentIndex={i}>
              <CardInfoCar key={i} listInfoCar={item} />
              // </CarouselItem>
            ))}
          </Wrapper>
        </Carousel>
      </Center>
    </>
  );
};

export default SpecialOffers;
