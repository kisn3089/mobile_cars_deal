import {
  CarInfo,
  CarInfoCardLayout,
  CarInfoContainer,
  CarName,
  CarNameTag,
  CarPrice,
  CarTag,
  CarUnit,
} from "./CarInfoCard.style";
import Img from "@/components/atom/img/Image";

const CarInfoCard = () => {
  return (
    <CarInfoCardLayout>
      <Img src="/img/SLASH21.png" alt="slash" size="large" />
      <CarInfoContainer>
        <CarNameTag>
          <CarName>모닝</CarName>
          <CarTag>인기</CarTag>
        </CarNameTag>
        <CarPrice>
          120,000<CarUnit>원</CarUnit>
        </CarPrice>
        <CarInfo>2021 | 5만km | 서울/경기/인천</CarInfo>
      </CarInfoContainer>
    </CarInfoCardLayout>
  );
};

export default CarInfoCard;
