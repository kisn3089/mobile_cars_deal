import Header from "@/components/organism/listCar/header/Header";
import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import { Flex } from "@/components/organism/listCar/header/Header.style";
import FetchCar from "@/components/organism/listCar/fetchCar/FetchCar";
import {
  Ment,
  RetrySvg,
} from "@/components/molecule/check/checkLayout/CheckLayout.style";
import CheckLayout from "@/components/molecule/check/checkLayout/CheckLayout";

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
          <CheckLayout>
            <Ment>{`실패했습니다. \n 다시 시도해주세요.`}</Ment>
            <RetrySvg
              src="/assets/icons/ic_retry.svg"
              alt="retry"
              onClick={resetErrorBoundary}
            />
          </CheckLayout>
        )}>
        <FetchCar />
      </CatchBoundary>
    </Flex>
  );
};

export default ListCarPage;
