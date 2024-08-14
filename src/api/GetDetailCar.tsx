import { DetailCarType } from "@/types/DetailCar.type";
import { CAR_DETAIL } from "@/util/contstants";
import { coreAxios } from "@/util/coreAxios";
import { useSuspenseQuery } from "@tanstack/react-query";

type GetDetailCarProps = {
  carClassId: number;
};

/* mode = /list | /loading | /fail */
/* GET 선택한 차량 조회 */
export const GetDetailCarSuspense = ({ carClassId }: GetDetailCarProps) =>
  useSuspenseQuery({
    queryKey: [CAR_DETAIL, carClassId, window.location.pathname],
    queryFn: () =>
      new Promise<DetailCarType[]>((resolve) => {
        const mode = window.location.pathname;
        const endUrl =
          mode !== "/fail" ? `/carClasses/${carClassId}` : "/쏘카가고싶어요";
        if (mode === "/list")
          coreAxios.get(endUrl).then((res) => resolve(res.data));
        setTimeout(async () => {
          coreAxios.get(endUrl).then((res) => resolve(res.data));
        }, 3000);
      }),

    select: (data): DetailCarType => data[0],
  });
