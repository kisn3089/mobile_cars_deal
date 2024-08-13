import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";
import Modal from "@/components/core/modal/Modal";
import DetailViewCar from "@/components/molecule/detailViewCar/DetailViewCar";
import { ListCarContext } from "@/components/organism/listCar/fetchCar/fetchCarContext";
import { useContext } from "react";

const DetailCarPage = ({ onClose }: { onClose: () => void }) => {
  const { detailCarId } = useContext(ListCarContext);
  console.log("detailCarId: ", detailCarId);

  if (!detailCarId) return null;

  return (
    <Modal onClose={onClose}>
      <CatchBoundary
        error={({ resetErrorBoundary }) => <h1>Erorr</h1>}
        loading={<h1>Loading</h1>}>
        <DetailViewCar carClassId={detailCarId}></DetailViewCar>
      </CatchBoundary>
    </Modal>
  );
};

export default DetailCarPage;
