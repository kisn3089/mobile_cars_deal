import { useSuspenseQuery } from "@tanstack/react-query";
import { CAR_LIST } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";
import { CarInfoWithPrice } from "@/types/CarInfo.type";
import { Car } from "@/util/method/carInfoMethod";

/* mode = /list | /loading | /fail */
/* GET 모든 차량 조회 */
export const GetCarListSuspense = () =>
  useSuspenseQuery({
    queryKey: [CAR_LIST, window.location.pathname],
    queryFn: () => coreAxios.get("/carClasses"),
    select: (data): CarInfoWithPrice[] =>
      data.data.map((car: CarInfoWithPrice) => new Car(car)),
  });
