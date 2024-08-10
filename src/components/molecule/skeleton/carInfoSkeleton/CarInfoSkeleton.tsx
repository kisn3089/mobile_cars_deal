import {
  CardCarLayoutSkeleton,
  ContainerCarSkeleton,
  ContentCarSkeleton,
  NameCarSkeleton,
  NameTagCarSkeleton,
  TagCarSkeleton,
  DeadSpaceSkeleton,
  GapSkeleton,
} from "./CarInfoSkeleton.style";

type InfoCarSkeletonProps = {
  count?: number;
};

const CarInfoSkeleton = ({ count = 1 }: InfoCarSkeletonProps) => {
  return (
    <GapSkeleton className="skeleton">
      {Array.from({ length: count }, (_, i) => i).map((_, i) => (
        <CardCarLayoutSkeleton key={i}>
          <DeadSpaceSkeleton className="space" />
          <ContainerCarSkeleton>
            <NameTagCarSkeleton>
              <NameCarSkeleton>{""}</NameCarSkeleton>
              <TagCarSkeleton>{""}</TagCarSkeleton>
            </NameTagCarSkeleton>
            <TagCarSkeleton>{""}</TagCarSkeleton>
            <ContentCarSkeleton>{""}</ContentCarSkeleton>
          </ContainerCarSkeleton>
        </CardCarLayoutSkeleton>
      ))}
    </GapSkeleton>
  );
};

export default CarInfoSkeleton;
