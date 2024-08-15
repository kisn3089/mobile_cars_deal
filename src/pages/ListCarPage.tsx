import Header from "@/components/organism/listCar/header/Header";
import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import {
  Flex,
  Padding,
} from "@/components/organism/listCar/header/Header.style";
import FetchCar from "@/components/organism/listCar/fetchCar/FetchCar";
import FailWithRetry from "@/components/core/failWithRetry/FailWithRetry";
import FilterControl from "@/components/organism/filterControl/FilterControl";

const ListCarPage = () => {
  return (
    <>
      <Header />
      <FilterControl />
      <CatchBoundary
        loading={
          <Skeleton
            hasLoading={true}
            fallback={
              <Padding>
                <CarInfoSkeleton count={4} />
              </Padding>
            }></Skeleton>
        }
        error={({ resetErrorBoundary }) => (
          <FailWithRetry retry={resetErrorBoundary} />
        )}>
        <Flex>
          <FetchCar />
        </Flex>
      </CatchBoundary>
    </>
  );
};

export default ListCarPage;
