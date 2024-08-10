import Header from "@/components/organism/carList/header/Header";
import CatchBoundary from "@/components/molecule/catchBoundary/CatchBoundary";
import AllCars from "@/components/organism/carList/allCars/AllCars";
import FetchMain from "@/components/organism/carList/fetchMain/FetchMain";

const ListCarPage = () => {
  return (
    <>
      <Header />
      <CatchBoundary
        loading={<AllCars hasLoading />}
        error={<h1>Error.....</h1>}>
        <FetchMain />
      </CatchBoundary>
    </>
  );
};

export default ListCarPage;
