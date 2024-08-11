import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { CAR_LIST } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";
import { CarInfoType } from "@/types/CarInfo.type";

/* GET 모든 차량 조회 */
export const GetCarListSuspense = () =>
  useSuspenseQuery({
    queryKey: [CAR_LIST],
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(async () => {
          resolve(coreAxios.get("/carClasses"));
        }, 3000);
      }),
    // coreAxios.get("/carClasses"),

    // select: (data): CarInfoType[] => data.data,
    select: (data: any) => data.data,
  });

export const GetCarList = () =>
  useQuery({
    queryKey: [CAR_LIST],
    queryFn: () =>
      new Promise((resolve, reject) => {
        try {
          setTimeout(async () => {
            resolve(coreAxios.get("/carClasses"));
          }, 3000);
        } catch (err) {
          reject(err);
        }
      }),
    // coreAxios.get("/carClassess"),

    // select: (data): CarInfoType[] => data.data,
    select: (data: any) => data.data,
    enabled: false,
  });
