import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";
import FailWithRetry from "@/components/core/failWithRetry/FailWithRetry";
import Modal from "@/components/core/modal/Modal";
import DetailViewCar from "@/components/molecule/detailViewCar/DetailViewCar";
import DetailCarSkeleton from "@/components/molecule/skeleton/detailCarSkeleton/DetailCarSkeleton";
import { ListCarContext } from "@/components/organism/listCar/fetchCar/fetchCarContext";
import { useContext } from "react";

const DetailCarPage = ({ onClose }: { onClose: () => void }) => {
  const { detailCarId } = useContext(ListCarContext);

  if (!detailCarId) return null;

  return (
    <Modal onClose={onClose}>
      <CatchBoundary
        error={({ resetErrorBoundary }) => (
          <FailWithRetry retry={resetErrorBoundary} />
        )}
        loading={<DetailCarSkeleton />}>
        <DetailViewCar carClassId={detailCarId}></DetailViewCar>
      </CatchBoundary>
    </Modal>
  );
};

export default DetailCarPage;
