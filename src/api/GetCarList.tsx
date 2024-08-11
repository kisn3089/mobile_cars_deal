import { useSuspenseQuery } from "@tanstack/react-query";
import { CAR_LIST } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";

/* GET 모든 차량 조회 */
export const GetCarListSuspense = () =>
  useSuspenseQuery({
    queryKey: [CAR_LIST],
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(async () => {
          resolve(coreAxios.get("/carClassess"));
        }, 3000);
      }),
    // coreAxios.get("/carClasses"),

    // select: (data): CarInfoType[] => data.data,
    select: (data: any) => data.data,
  });
