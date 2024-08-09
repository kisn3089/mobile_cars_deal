import { useQuery } from "@tanstack/react-query";
import { CAR_LIST, LIMIT } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";

/* GET 모든 차량 조회 */
export const GetCarList = (page: number | string = 1) =>
  useQuery({
    queryKey: [CAR_LIST],
    queryFn: () => coreAxios.get("/carClasses"),
    enabled: true,
    select: (data) => data.data.slice(0, +page * LIMIT),
  });
