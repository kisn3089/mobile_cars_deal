import { Link } from "react-router-dom";
import { Circle, Layout, Svg } from "./TestControl.style";

const TestControl = () => {
  return (
    <Layout>
      <Link to={"/list"}>
        <Circle>
          <Svg src="/assets/icons/ic_success.svg" />
        </Circle>
      </Link>
      <Link to={"/loading"}>
        <Circle>
          <Svg src="/assets/icons/ic_loading.svg" />
        </Circle>
      </Link>
      <Link to={"/fail"}>
        <Circle>
          <Svg src="/assets/icons/ic_fail.svg" />
        </Circle>
      </Link>
    </Layout>
  );
};

export default TestControl;
