import { RequestMore } from "./MoreRequest.style";
import { PropsWithChildren, useContext } from "react";
import { ListCarContext } from "@/components/organism/listCar/fetchCar/fetchCarContext";

const MoreRequest = ({ children }: PropsWithChildren) => {
  const { page, totalPages, requestMore } = useContext(ListCarContext);
  const disabled = totalPages <= page;

  return (
    <RequestMore onClick={requestMore} disabled={disabled}>
      {children}
    </RequestMore>
  );
};

export default MoreRequest;
