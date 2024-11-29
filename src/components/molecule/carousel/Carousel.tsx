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
  return (
    <Layout $width={widthTargetDrag - gap}>
      <DragSpace
        ref={refCarousel}
        $widthTargetDrag={widthTargetDrag}
        $indexCurrent={indexCurrent}
        $moveX={moveX}
        $dataSize={dataSize}
        $gap={gap}
        onMouseDown={dragEvent}
        onTouchStart={touchEvent}>
        {children} {/* 여기에 ref를 걸고 싶어 */}
      </DragSpace>
    </Layout>
  );
};

export default Carousel;
