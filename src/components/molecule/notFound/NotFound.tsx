import { Link } from "react-router-dom";
import { BackMain, NotFoundLayout, NotFoundMessage } from "./NotFound.style";

const NotFound = () => {
  return (
    <NotFoundLayout>
      <NotFoundMessage>{"Not Found!"}</NotFoundMessage>
      <Link to={"list"}>
        <BackMain>{"돌아가기"}</BackMain>
      </Link>
    </NotFoundLayout>
  );
};

export default NotFound;
