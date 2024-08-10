import React from "react";

export interface DragEventProps {
  onDragChange: (moveX: number) => void;
  onDragEnd: (moveX: number) => void;
}

export const inRange = (target: number, min: number, max: number) => {
  if (target < min) return min;
  if (target > max) return max;
  return target;
};

/* Drag 시작점부터 종료까지의 x값을 callback 으로 값 전달 */
export const dragEvent = ({ onDragChange, onDragEnd }: DragEventProps) => {
  /* MouseDown 이후부터 MouseMove & MouseUp Event 동작한다 */
  const onMouseDown = (clickEvent: React.MouseEvent<HTMLDivElement>) => {
    clickEvent.stopPropagation();

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragChange(deltaX);
    };

    const mouseUpHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragEnd(deltaX);
      document.removeEventListener("mousemove", mouseMoveHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  return onMouseDown;
};
