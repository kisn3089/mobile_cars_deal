import { Link } from "react-router-dom";
import { Circle, Absolute, Svg } from "./TestControl.style";

const controlJson = [
  { to: "/list/query", src: "/assets/icons/ic_success.svg" },
  { to: "/loading/query", src: "/assets/icons/ic_loading.svg" },
  { to: "/fail", src: "/assets/icons/ic_fail.svg" },
];

const TestControl = () => {
  return (
    <Absolute>
      {controlJson.map((property) => (
        <Link to={property.to} key={property.to}>
          <Circle>
            <Svg src={property.src} />
          </Circle>
        </Link>
      ))}
    </Absolute>
  );
};

export default TestControl;
