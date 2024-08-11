import { GetCarList } from "@/api/GetCarList";

const DetailCarPage = () => {
  const { data, refetch, isLoading } = GetCarList();
  console.log(isLoading, data);
  return (
    <div>
      <button onClick={() => refetch()}>call</button>
    </div>
  );
};

export default DetailCarPage;
