import Header from "@/components/organism/listCar/header/Header";
import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import { Flex } from "@/components/organism/listCar/header/Header.style";
import FetchCar from "@/components/organism/listCar/fetchCar/FetchCar";
import FailWithRetry from "@/components/core/failWithRetry/FailWithRetry";

const ListCarPage = () => {
  return (
    <Flex>
      <Header />
      <CatchBoundary
        loading={
          <Skeleton
            hasLoading={true}
            fallback={<CarInfoSkeleton count={4} />}></Skeleton>
        }
        error={({ resetErrorBoundary }) => (
          <FailWithRetry retry={resetErrorBoundary} />
        )}>
        <FetchCar />
      </CatchBoundary>
    </Flex>
  );
};

export default ListCarPage;
