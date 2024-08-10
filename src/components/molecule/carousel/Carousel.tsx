import { PropsWithChildren } from "react";
import { DragSpace, Layout } from "./Carousel.style";
import { useDragCarousel } from "@/hooks/useDragEvent";

type CarouselProps = {
  gap: number;
  carouselDataSize: number;
} & PropsWithChildren;

const Carousel = ({ children, carouselDataSize, gap }: CarouselProps) => {
  const { carouselRef, currentIndex, transX, carouselSize, dragEvent } =
    useDragCarousel({ carouselDataSize: carouselDataSize, gap: gap });

  return (
    <Layout ref={carouselRef}>
      <DragSpace
        $carouselSize={carouselSize}
        $currentIndex={currentIndex}
        $transX={transX}
        $carouselDataSize={carouselDataSize}
        $gap={gap}
        onMouseDown={dragEvent}>
        {children}
      </DragSpace>
    </Layout>
  );
};

export default Carousel;
