import { DetailCarType } from "@/types/DetailCar.type";
import { CAR_DETAIL } from "@/util/contstants";
import { coreAxios } from "@/util/coreAxios";
import { useSuspenseQuery } from "@tanstack/react-query";

type GetDetailCarProps = {
  carClassId: number;
};

export const GetDetailCarSuspense = ({ carClassId }: GetDetailCarProps) =>
  useSuspenseQuery({
    queryKey: [CAR_DETAIL, carClassId],
    queryFn: () =>
      // new Promise((resolve, reject) => {
      //   setTimeout(async () => {
      //     resolve(coreAxios.get(`/carClassess/${carClassId}`));
      //   }, 3000);
      // }),
      coreAxios.get(`/carClasses/${carClassId}`),

    select: (data): DetailCarType => data.data[0],
    // select: (data: any) => data.data[0],
  });
