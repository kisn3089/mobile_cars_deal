import Header from "@/components/organism/carList/header/Header";
import CatchBoundary from "@/components/molecule/catchBoundary/CatchBoundary";
import FetchMain from "@/components/organism/carList/fetchMain/FetchMain";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import { Flex } from "@/components/organism/carList/header/Header.style";
import Check from "@/components/molecule/check/Check";

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
          <Check
            ment={`실패했습니다. \n 다시 시도해주세요!`}
            svgPath="/assets/ic_retry.svg"
            checkFor={false}
            retry={() => resetErrorBoundary}
          />
        )}>
        <FetchMain />
      </CatchBoundary>
    </Flex>
  );
};

export default ListCarPage;
