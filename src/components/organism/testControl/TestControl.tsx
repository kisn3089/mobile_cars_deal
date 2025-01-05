import { Link } from "react-router-dom";
import {
  Circle,
  Absolute,
  Svg,
  Column,
  ControlContent,
} from "./TestControl.style";
import { useQueryClient } from "@tanstack/react-query";

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
  {
    to: "",
    src: "/assets/icons/ic_github.svg",
    content: "회고 보기",
    onClick: () => window.open("https://github.com/kisn3089/mobile_cars_deal"),
  },
];

const TestControl = () => {
  const queryClient = useQueryClient();

  const clickByLink = (clickEvent?: () => void) => {
    if (clickEvent) clickEvent();
    return queryClient.clear();
  };

  return (
    <Absolute>
      <Column>
        {controlJson.map((property) => (
          <Link
            to={property.to}
            key={property.to}
            onClick={() => clickByLink(property.onClick)}>
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
