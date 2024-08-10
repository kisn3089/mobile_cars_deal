import { dragEvent, inRange } from "@/util/dragEvent";
import { useEffect, useRef, useState } from "react";

type useDragCarouselProps = {
  carouselDataSize: number;
  gap: number;
};

export const useDragCarousel = ({
  carouselDataSize,
  gap,
}: useDragCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselSize, setCarouselSize] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;
    const carouselRect = carouselRef.current.getBoundingClientRect();

    setCarouselSize(carouselRect.width + gap);
  }, [carouselRef]);

  /* DragChange Event 드래그시 캐러셀 요소 밖으로 나가는걸 방지 */
  const onDragChange = (moveX: number) => {
    setTransX(inRange(moveX, -carouselSize, carouselSize));
  };

  /* DragEnd Event  */
  const onDragEnd = (moveX: number) => {
    /* 데이터 길이만큼 */
    const maxIndex = carouselDataSize - 1;

    /* moveX = 드래그 시작점부터 종료까지 움직인 x값 ( transX와 같다 ) */
    /* 드래그 범위가 캐러셀 요소의 크기의 절반을 넘기면 */
    if (moveX < -carouselSize / 2)
      setCurrentIndex(inRange(currentIndex + 1, 0, maxIndex));
    if (moveX > carouselSize / 2)
      setCurrentIndex(inRange(currentIndex - 1, 0, maxIndex));

    setTransX(0);
  };

  return {
    carouselRef,
    currentIndex,
    transX,
    carouselSize,
    dragEvent: dragEvent({ onDragChange, onDragEnd }),
  };
};
