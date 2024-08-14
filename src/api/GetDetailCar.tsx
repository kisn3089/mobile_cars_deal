import { DetailCarType } from "@/types/DetailCar.type";
import { CAR_DETAIL } from "@/util/contstants";
import { coreAxios } from "@/util/coreAxios";
import { useSuspenseQuery } from "@tanstack/react-query";

type GetDetailCarProps = {
  carClassId: number;
};

/* GET 선택한 차량 조회 */
export const GetDetailCarSuspense = ({ carClassId }: GetDetailCarProps) =>
  useSuspenseQuery({
    queryKey: [CAR_DETAIL, carClassId],
    queryFn: () => coreAxios.get(`/carClasses/${carClassId}`),

    select: (data): DetailCarType => data.data[0],
  });

/* GET 선택한 차량 조회 테스트 */
export const TestGetDetailCar = ({ carClassId }: GetDetailCarProps) =>
  useSuspenseQuery({
    queryKey: [CAR_DETAIL, carClassId],
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(async () => {
          resolve(coreAxios.get(`/carClassess/${carClassId}`));
        }, 2000);
      }),
    select: (data: any) => data.data[0],
  });
