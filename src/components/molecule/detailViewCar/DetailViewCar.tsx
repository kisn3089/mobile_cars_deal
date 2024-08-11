import Img from "@/components/atom/img/Image";
import {
  ColumnGroup,
  Layout,
  Name,
  Padding,
  Table,
  Td,
  Th,
} from "./DetailViewCar.style";
import { GetDetailCarSuspense } from "@/api/GetDetailCar";

type DetailViewCarProps = {
  carClassId: number;
};

const DetailViewCar = ({ carClassId }: DetailViewCarProps) => {
  const { data: detailCar } = GetDetailCarSuspense({ carClassId });
  console.log(detailCar);

  return (
    <Layout>
      <Img src={detailCar.carImage} alt={detailCar.carClassName} size="large" />
      <Padding>
        <ColumnGroup>
          <Name>{detailCar.carClassName}</Name>
          <Table>
            <Th>{`제조사: ${detailCar.maker}`}</Th>
            <Td>{`분류: ${detailCar.carModel}`}</Td>
            <Td>{`연료: ${detailCar.fuel}`}</Td>
            <Td>{`변속 방지: ${detailCar.gearbox}`}</Td>
          </Table>
        </ColumnGroup>
      </Padding>
    </Layout>
  );
};

export default DetailViewCar;
