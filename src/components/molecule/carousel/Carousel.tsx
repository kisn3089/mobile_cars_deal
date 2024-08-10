import { PropsWithChildren, useEffect, useRef } from "react";
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
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childRef.current) {
      const width = childRef.current.getBoundingClientRect().width;
      console.log(width);
    }
  }, [childRef]);

  return (
    <Layout ref={refCarousel} $width={widthTargetDarg - gap}>
      <DragSpace
        $widthTargetDarg={widthTargetDarg}
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
