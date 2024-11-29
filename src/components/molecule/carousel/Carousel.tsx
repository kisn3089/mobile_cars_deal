import { PropsWithChildren } from "react";
import { DragSpace, Layout } from "./Carousel.style";
import { useDragCarousel } from "@/hooks/useDragCarousel";

type CarouselProps = {
  gap: number;
  dataSize: number;
} & PropsWithChildren;

/* Require: TouchEvent Click */
const Carousel = ({ children, dataSize, gap }: CarouselProps) => {
  const {
    refCarousel,
    indexCurrent,
    moveX,
    widthTargetDrag,
    dragEvent,
    touchEvent,
  } = useDragCarousel({ dataSize: dataSize, gap: gap });
  console.log(widthTargetDrag);

  return (
    <Layout ref={refCarousel} $width={widthTargetDrag - gap}>
      <DragSpace
        $widthTargetDrag={widthTargetDrag}
        $indexCurrent={indexCurrent}
        $moveX={moveX}
        $dataSize={dataSize}
        $gap={gap}
        onMouseDown={dragEvent}
        onTouchStart={touchEvent}>
        {children}
      </DragSpace>
    </Layout>
  );
};

export default Carousel;
