import { DetailCarType } from "@/types/CarInfo.type";
import { CarDiscount, DiscountPercent } from "./DiscountPrice.style";

type DiscountPriceProps = {
  carInfos: DetailCarType;
};

const DiscountPrice = ({ carInfos }: DiscountPriceProps) => {
  if (carInfos.discountPercent === 0) return <></>;
  return (
    <>
      <CarDiscount>{`${carInfos.round()}원`}</CarDiscount>
      <DiscountPercent>{`-${carInfos.discountPercent}%`}</DiscountPercent>
    </>
  );
};

export default DiscountPrice;
