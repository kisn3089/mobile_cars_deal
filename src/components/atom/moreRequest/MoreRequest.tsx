import { RequestMore } from "./MoreRequest.style";
import { PropsWithChildren, useContext } from "react";
import { LIMIT } from "@/util/contstants";
import { ListCarContext } from "@/components/organism/listCar/fetchCar/fetchCarContext";

const MoreRequest = ({ children }: PropsWithChildren) => {
  const { getListCar, page, requestMore } = useContext(ListCarContext);

  const sliceList = getListCar?.slice(0, page * LIMIT) || [];
  const disabled = !sliceList[0] || sliceList.length % LIMIT > 0;

  return (
    <RequestMore onClick={requestMore} disabled={disabled}>
      {children}
    </RequestMore>
  );
};

export default MoreRequest;
