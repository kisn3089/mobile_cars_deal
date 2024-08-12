import Header from "@/components/organism/listCar/header/Header";
import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import { Flex } from "@/components/organism/listCar/header/Header.style";
import FetchCar from "@/components/organism/listCar/fetchCar/FetchCar";
import CheckFirstChild from "@/components/molecule/checkFirstChild/CheckFirstChild";
import {
  Ment,
  RetrySvg,
} from "@/components/molecule/checkFirstChild/checkLayout/CheckLayout.style";

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
          <CheckFirstChild
            checkFor={false}
            fallback={
              <>
                <Ment>{`실패했습니다. \n 다시 시도해주세요.`}</Ment>
                <RetrySvg
                  src="/assets/icons/ic_retry.svg"
                  alt="retry"
                  onClick={resetErrorBoundary}
                />
              </>
            }
          />
        )}>
        <FetchCar />
      </CatchBoundary>
    </Flex>
  );
};

export default ListCarPage;
