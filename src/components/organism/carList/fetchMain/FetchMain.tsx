import { GetCarList, GetCarListSuspense } from "@/api/GetCarList";
import { useState } from "react";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import SpecialOffers from "../specialOffers/SpecialOffers";

const FetchMain = () => {
  const [page, setPage] = useState(1);
  const { data: listCar, isSuccess } = GetCarListSuspense();
  if (isSuccess) console.log(listCar);

  const requestMore = () => {
    setPage((prev) => prev + 1);
  };

  // const specialFilter = dummy.filter(
  const specialFilter =
    listCar?.filter(
      (carItem: any) => carItem.carTypeTags.includes("특가")
      // &&
      //   carItem.carTypeTags.includes("인기")
    ) || [];
  // const sliceList = [""];
  const sliceList = listCar?.slice(0, page * LIMIT) || [];
  console.log(page);

  return (
    <>
      <SpecialOffers listSpecial={specialFilter} />
      <AllCars carList={[]} />
      <Footer
        requestMore={requestMore}
        disabled={!sliceList[0] || sliceList.length % LIMIT > 0}
      />
    </>
  );
};

export default FetchMain;
