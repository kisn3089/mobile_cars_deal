import { useSuspenseQuery } from "@tanstack/react-query";
import { CAR_LIST, LIMIT } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";
import { CarInfoType } from "@/types/CarInfo.type";

/* GET 모든 차량 조회 */
export const GetCarList = (page: number | string = 1) =>
  useSuspenseQuery({
    queryKey: [CAR_LIST],
    queryFn: () => coreAxios.get("/carClasses"),
    select: (data): CarInfoType[] => data.data.slice(0, +page * LIMIT),
  });
