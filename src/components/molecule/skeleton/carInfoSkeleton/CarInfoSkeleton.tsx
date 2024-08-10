import {
  Layout,
  Column,
  Content,
  Name,
  NameTag,
  Tag,
  DeadSpace,
  Gap,
} from "./CarInfoSkeleton.style";

type InfoCarSkeletonProps = {
  count?: number;
};

const CarInfoSkeleton = ({ count = 1 }: InfoCarSkeletonProps) => {
  return (
    <Gap className="skeleton">
      {Array.from({ length: count }, (_, i) => i).map((_, i) => (
        <Layout key={i}>
          <DeadSpace className="space" />
          <Column>
            <NameTag>
              <Name />
              <Tag />
            </NameTag>
            <Tag />
            <Content />
          </Column>
        </Layout>
      ))}
    </Gap>
  );
};

export default CarInfoSkeleton;
