import { ColumnGroup, Padding } from "../../detailViewCar/DetailViewCar.style";
import Skeleton from "../skeleton/Skeleton";
import {
  DeadSpace,
  NameSpace,
  SquareSkeleton,
} from "./DetailCarSkeleton.style";

const DetailCarSkeleton = () => {
  return (
    <Skeleton
      hasLoading
      fallback={
        <div className="skeleton">
          <DeadSpace className="space" />
          <Padding>
            <ColumnGroup>
              <NameSpace />
              <SquareSkeleton className="space" />
              <NameSpace />
              <SquareSkeleton className="space" />
              <NameSpace />
              <SquareSkeleton className="space" />
            </ColumnGroup>
          </Padding>
        </div>
      }></Skeleton>
  );
};

export default DetailCarSkeleton;
