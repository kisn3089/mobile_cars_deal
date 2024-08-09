import { CarDetailType } from "@/types/CarInfo.type";
import { CarDiscount, DiscountPercent } from "./DiscountPrice.style";

type DiscountPriceProps = {
  carInfos: CarDetailType;
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
