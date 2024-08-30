import { Link } from "react-router-dom";
import { Circle, Absolute, Svg } from "./TestControl.style";

const TestControl = () => {
  return (
    <Absolute>
      <Link to={"/list/query"}>
        <Circle>
          <Svg src="/assets/icons/ic_success.svg" />
        </Circle>
      </Link>
      <Link to={"/loading/query"}>
        <Circle>
          <Svg src="/assets/icons/ic_loading.svg" />
        </Circle>
      </Link>
      <Link to={"/fail"}>
        <Circle>
          <Svg src="/assets/icons/ic_fail.svg" />
        </Circle>
      </Link>
    </Absolute>
  );
};

export default TestControl;
