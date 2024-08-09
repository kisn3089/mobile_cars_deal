import Header from "@/components/organism/carList/header/Header";
import CatchBoundary from "@/components/molecule/catchBoundary/CatchBoundary";
import MainFetch from "@/components/organism/carList/mainFetch/MainFetch";
import AllCars from "@/components/organism/carList/allCars/AllCars";

const CarListPage = () => {
  return (
    <>
      <Header />
      <CatchBoundary
        loading={<AllCars hasLoading />}
        error={<h1>Error.....</h1>}>
        <MainFetch />
      </CatchBoundary>
    </>
  );
};

export default CarListPage;
