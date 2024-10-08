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
  /* MouseDown 이후부터 MouseMove & MouseUp Event 동작 */
  const onMouseDown = (clickEvent: React.MouseEvent<HTMLDivElement>) => {
    clickEvent.stopPropagation();

    const mouseMove = (moveEvent: MouseEvent) => {
      const stopCapture = (e: MouseEvent) => e.stopPropagation();

      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragChange(deltaX);

      document.addEventListener("click", stopCapture, {
        once: true,
        capture: true,
      });
    };

    const mouseUp = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - clickEvent.pageX;
      onDragEnd(deltaX);

      /* mouseMove 이벤트 삭제하면서 click 이벤트 삭제 즉, mouseMove 이벤트가 발생했다면(드래그 했다면) click 이벤트 전파 방지 */
      document.removeEventListener("mousemove", mouseMove);
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp, {
      once: true,
      capture: true,
    });
  };

  return onMouseDown;
};

export const touchEvent = ({ onDragChange, onDragEnd }: DragEventProps) => {
  /* TouchStart 이후부터 TouchMove & TouchEnd Event 동작 */
  const onTouchStart = (touchStart: React.TouchEvent<HTMLDivElement>) => {
    touchStart.stopPropagation();

    const touchMove = (touchEvent: TouchEvent) => {
      const deltaX =
        touchEvent.changedTouches[0].pageX - touchStart.changedTouches[0].pageX;
      onDragChange(deltaX);
    };

    const touchEnd = (touchEvent: TouchEvent) => {
      const deltaX =
        touchEvent.changedTouches[0].pageX - touchStart.changedTouches[0].pageX;
      onDragEnd(deltaX);
      document.removeEventListener("touchmove", touchMove);
    };

    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", touchEnd, { once: true });
  };

  return onTouchStart;
};
