import { PropsWithChildren } from "react";
import { Padding, Layout, Ment, ReTry } from "./HasCars.style";

type HasCarsProps = {
  content: string;
  has: boolean;
  retry?: () => void;
} & PropsWithChildren;

const HasCars = ({ children, content, has, retry }: HasCarsProps) => {
  if (has) return <>{children}</>;

  return (
    <Padding>
      <Layout>
        <Ment>{content}</Ment>
        <ReTry src={"/assets/ic_retry.svg"} alt="retry" onClick={retry} />
      </Layout>
    </Padding>
  );
};

export default HasCars;
