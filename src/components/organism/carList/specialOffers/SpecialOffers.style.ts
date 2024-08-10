import styled from "styled-components";

export const Center = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Carousel = styled.div`
  width: 346px;
`;

export const Wrapper = styled.div.attrs<{
  $currentIndex: number;
  $width: number;
  $leng: number;
  $transX: number;
}>(({ $currentIndex, $leng, $transX, $width, theme }) => ({
  style: {
    /* 데이터 길이 * 100% */
    width: `${$leng * 100}%`,
    /* 현재 carousel index * 캐러셀 요소의 가로 크기 + 터치 동작 + gap 10px 준만큼 더해준다. */
    transform: `translateX(${
      -$currentIndex * $width + $transX + (($leng - 1) * 10) / 2
    }px)`,
    /* 드래그 종료시 transX 값은 0이 된다. 즉 드래그 종료시부터 300ms 속도로 transition이 동작 */
    transition: `transform ${$transX ? 0 : 300}ms ${theme.transition.smooth}`,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;
