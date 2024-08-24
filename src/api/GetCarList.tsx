import { useQuery } from "@tanstack/react-query";
import { CAR_LIST } from "../util/contstants";
import { coreAxios } from "../util/coreAxios";

/* GET 모든 차량 조회 */
export const GetCarList = () =>
  useQuery({
    queryKey: [CAR_LIST],
    queryFn: () => coreAxios.get("/carClasses"),
    enabled: false,
    select: (data) => data.data,
  });
