import styled from "styled-components";

export const Layout = styled.div`
  width: 346px;
`;

export const DragSpace = styled.div.attrs<{
  $currentIndex: number;
  $carouselSize: number;
  $carouselDataSize: number;
  $transX: number;
  $gap: number;
}>(
  ({
    $currentIndex,
    $carouselDataSize,
    $transX,
    $carouselSize,
    $gap,
    theme,
  }) => ({
    style: {
      /* 데이터 길이에 따른 총 width */
      width: `${$carouselDataSize * 100}%`,

      /* 현재 carousel index * 캐러셀 요소의 가로 크기 + 터치 동작 + gap 준만큼 더해준다. */
      transform: `translateX(${
        -$currentIndex * $carouselSize +
        $transX +
        (($carouselDataSize - 1) * $gap) / 2
      }px)`,

      /* 드래그 종료시 transX 값은 0이 된다. 즉 드래그 종료시부터 300ms 속도로 transition이 동작 */
      transition: `transform ${$transX ? 0 : 300}ms ${theme.transition.smooth}`,
    },
  })
)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => `0 ${$gap}px`};
`;
