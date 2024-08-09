import Header from "@/components/organism/carList/header/Header";
import CatchBoundary from "@/components/molecule/catchBoundary/CatchBoundary";
import MainFetch from "@/components/organism/carList/mainFetch/MainFetch";
import CarListLoading from "@/components/molecule/loading/carListLoading/CarListLoading";
import AllCars from "@/components/organism/carList/allCars/AllCars";

const CarListPage = () => {
  return (
    <>
      <Header />
      <CatchBoundary
        loading={<AllCars hasLoading />}
        error={<h1>Error.....</h1>}>
        {/* <CatchBoundary loading={<h1>Loading....</h1>} error={<h1>Error.....</h1>}> */}
        <MainFetch />
      </CatchBoundary>
    </>
  );
};

export default CarListPage;
