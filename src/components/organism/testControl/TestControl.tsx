import { Link } from "react-router-dom";
import {
  Circle,
  Absolute,
  Svg,
  Column,
  ControlContent,
} from "./TestControl.style";
import { useQueryClient } from "@tanstack/react-query";
import { CAR_LIST } from "@/util/contstants";

const controlJson = [
  {
    to: "/list/query",
    src: "/assets/icons/ic_success.svg",
    content: "성공 환경",
  },
  {
    to: "/loading/query",
    src: "/assets/icons/ic_loading.svg",
    content: "로딩 환경",
  },
  { to: "/fail", src: "/assets/icons/ic_fail.svg", content: "실패 환경" },
];

const TestControl = () => {
  const queryClient = useQueryClient();

  return (
    <Absolute>
      <Column>
        {controlJson.map((property) => (
          <Link
            to={property.to}
            key={property.to}
            onClick={() => queryClient.clear()}>
            <Circle>
              <ControlContent>{property.content}</ControlContent>
              <Svg src={property.src} />
            </Circle>
          </Link>
        ))}
      </Column>
    </Absolute>
  );
};

export default TestControl;
