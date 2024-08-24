import { dragEvent, inRange, touchEvent } from "@/util/dragEvent";
import { useEffect, useMemo, useRef, useState } from "react";

type useDragCarouselProps = {
  dataSize: number;
  gap: number;
};

export const useDragCarousel = ({ dataSize, gap }: useDragCarouselProps) => {
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const refCarousel = useRef<HTMLDivElement>(null);
  const [widthTargetDarg, setWidthTargetDrag] = useState(0);

  useEffect(() => {
    if (!refCarousel.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === refCarousel.current) {
          const rectCarousel =
            refCarousel.current.children[0].children[0].getBoundingClientRect()
              .width;
          setWidthTargetDrag(rectCarousel + gap);
        }
      });
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(refCarousel.current);

    // Clean up on unmount
    return () => {
      observer.disconnect();
    };
  }, [gap]);

  /* DragChange Event 드래그시 캐러셀 요소 밖으로 나가는걸 방지 */
  const onDragChange = useMemo(
    () => (moveX: number) => {
      setMoveX(inRange(moveX, -widthTargetDarg, widthTargetDarg));
    },
    [widthTargetDarg]
  );

  /* DragEnd Event  */
  const onDragEnd = (moveX: number) => {
    /* 데이터 길이만큼 */
    const maxIndex = dataSize - 1;

    /* moveX = 드래그 시작점부터 종료까지 움직인 x값 ( transX와 같다 ) */
    /* 드래그 범위가 캐러셀 요소의 크기의 3 / 1을 넘기면 */
    if (moveX < -widthTargetDarg / 3)
      setIndexCurrent(inRange(indexCurrent + 1, 0, maxIndex));
    if (moveX > widthTargetDarg / 3)
      setIndexCurrent(inRange(indexCurrent - 1, 0, maxIndex));

    setMoveX(0);
  };

  return {
    refCarousel,
    indexCurrent,
    moveX,
    widthTargetDarg,
    dragEvent: dragEvent({ onDragChange, onDragEnd }),
    touchEvent: touchEvent({ onDragChange, onDragEnd }),
  };
};
