import styled from "styled-components";

export const Center = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

// export const Layout = styled.div`
//   width: 100%;
// `;

export const Carousel = styled.div`
  /* overflow: hidden; */
  width: 346px;
`;

export const Wrapper = styled.div<{
  $currentIndex: number;
  $width: number;
  $leng: number;
  $transX: number;
}>`
  width: ${({ $leng }) => `${$leng * 100}%`};
  /* width: ${({ $leng }) => `${($leng || 1) * 100}%`}; */
  /* width: ${({ $leng }) => `${($leng || 1) * 100 - Math.pow($leng, 2)}%`}; */
  transform: ${({ $currentIndex, $width, $transX, $leng }) =>
    `translateX(${
      -$currentIndex * $width + $transX + (($leng - 1) * 10) / 2
    }px)`};
  transition: ${({ $transX }) =>
    `transform ${$transX ? 0 : 300}ms ease-in-out 0s`};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

export const CarouselItem = styled.div<{ $currentIndex: number }>`
  position: absolute;
  top: 0;
  left: ${({ $currentIndex }) => `${$currentIndex}50%`};
  transform: translateX(-50%);
`;
