import { GetCarList } from "@/api/GetCarList";

const CarListPage = () => {
  const { data: carList, refetch, isSuccess } = GetCarList();
  if (isSuccess) console.log(carList);

  return (
    <div>
      <button onClick={() => refetch()}>CLick</button>
    </div>
  );
};

export default CarListPage;
