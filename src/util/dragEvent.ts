import React from "react";

export interface IRegistDragEvent {
  onDragChange?: (daltaX: number, deltaY?: number) => void;
  onDragEnd?: (deltaX: number, deltaY?: number) => void;
  stopPropagation?: boolean;
}

// Drag Event
export const registDragEvent = ({
  onDragChange,
  onDragEnd,
  stopPropagation,
}: IRegistDragEvent) => {
  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation();

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        onDragChange?.(deltaX);
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        onDragEnd?.(deltaX);
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
};
