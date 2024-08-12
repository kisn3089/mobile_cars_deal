import { ListCarContext } from "@/components/organism/listCar/fetchCar/FetchCar";
import { RequestMore } from "./MoreRequest.style";
import { PropsWithChildren, useContext } from "react";

const MoreRequest = ({ children }: PropsWithChildren) => {
  const { requestMore, disabled } = useContext(ListCarContext);

  return (
    <RequestMore onClick={requestMore} disabled={disabled}>
      {children}
    </RequestMore>
  );
};

export default MoreRequest;
