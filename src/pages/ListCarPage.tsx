import Header from "@/components/organism/carList/header/Header";
import CatchBoundary from "@/components/molecule/catchBoundary/CatchBoundary";
import AllCars from "@/components/organism/carList/allCars/AllCars";
import FetchMain from "@/components/organism/carList/fetchMain/FetchMain";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import { Flex } from "@/components/organism/carList/header/Header.style";

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
        // loading={<AllCars hasLoading />}
        error={<h1>Error.....</h1>}>
        <FetchMain />
      </CatchBoundary>
    </Flex>
  );
};

export default ListCarPage;
