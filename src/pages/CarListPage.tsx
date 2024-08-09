import Header from "@/components/organism/carList/header/Header";
import CatchBoundary from "@/components/molecule/catchBoundary/CatchBoundary";
import MainFetch from "@/components/organism/carList/mainFetch/MainFetch";

const CarListPage = () => {
  return (
    <>
      <Header />
      <CatchBoundary fallback={<h1>Loading....</h1>}>
        <MainFetch />
      </CatchBoundary>
    </>
  );
};

export default CarListPage;
