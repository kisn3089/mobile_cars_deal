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
    queryFn: () => coreAxios.get(`/carClasses/${carClassId}`),
    select: (data): DetailCarType => data.data[0],
  });
