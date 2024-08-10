import { PropsWithChildren } from "react";
import { DragSpace, Layout } from "./Carousel.style";
import { useDragCarousel } from "@/hooks/useDragCarousel";

type CarouselProps = {
  gap: number;
  dataSize: number;
} & PropsWithChildren;

const Carousel = ({ children, dataSize, gap }: CarouselProps) => {
  const {
    refCarousel,
    indexCurrent,
    moveX,
    widthTargetDarg,
    dragEvent,
    touchEvent,
  } = useDragCarousel({ dataSize: dataSize, gap: gap });

  return (
    <Layout ref={refCarousel}>
      <DragSpace
        $widthTargetDarg={widthTargetDarg}
        $indexCurrent={indexCurrent}
        $moveX={moveX}
        $dataSize={dataSize}
        $gap={gap}
        // onMouseDown={dragEvent}
        onTouchStart={touchEvent}>
        {children}
      </DragSpace>
    </Layout>
  );
};

export default Carousel;
