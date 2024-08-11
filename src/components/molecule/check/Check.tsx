import { PropsWithChildren } from "react";
import { Padding, Layout, Ment, RetrySvg } from "./Check.style";

type HasCarsProps = {
  ment: string;
  svgPath: string;
  checkFor: boolean;
  retry?: () => void;
  isFetching?: boolean;
} & PropsWithChildren;

const Check = ({ children, ment, checkFor, svgPath, retry }: HasCarsProps) => {
  if (checkFor) return <>{children}</>;

  return (
    <Padding>
      <Layout>
        <Ment>{ment}</Ment>
        <RetrySvg src={svgPath} alt={svgPath.split("/")[2]} onClick={retry} />
      </Layout>
    </Padding>
  );
};

export default Check;
