import { useSuspenseQuery } from "@tanstack/react-query";
import { CAR_LIST } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";
import { CarInfoType } from "@/types/CarInfo.type";

/* mode = /list | /loading | /fail */
/* GET 모든 차량 조회 */
export const GetCarListSuspense = () =>
  useSuspenseQuery({
    queryKey: [CAR_LIST, window.location.pathname],
    queryFn: () =>
      new Promise<CarInfoType[]>((resolve, reject) => {
        const mode = window.location.pathname;
        const endUrl = mode !== "/fail" ? "/carClasses" : "/쏘카가고싶어요";
        if (mode === "/list")
          coreAxios.get(endUrl).then((res) => resolve(res.data));

        setTimeout(async () => {
          if (mode === "/fail") reject();
          coreAxios.get(endUrl).then((res) => resolve(res.data));
        }, 3000);
      }),

    select: (data): CarInfoType[] => data,
  });
