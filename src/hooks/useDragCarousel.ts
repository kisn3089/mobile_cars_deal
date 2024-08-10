import { dragEvent, inRange } from "@/util/dragEvent";
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
    const rectCarousel = refCarousel.current.getBoundingClientRect();

    setWidthTargetDrag(rectCarousel.width + gap);
  }, [refCarousel]);

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
    /* 드래그 범위가 캐러셀 요소의 크기의 절반을 넘기면 */
    if (moveX < -widthTargetDarg / 2)
      setIndexCurrent(inRange(indexCurrent + 1, 0, maxIndex));
    if (moveX > widthTargetDarg / 2)
      setIndexCurrent(inRange(indexCurrent - 1, 0, maxIndex));

    setMoveX(0);
  };

  return {
    refCarousel,
    indexCurrent,
    moveX,
    widthTargetDarg,
    dragEvent: dragEvent({ onDragChange, onDragEnd }),
  };
};
