import CheckLayout from "@/components/molecule/check/checkLayout/CheckLayout";
import { Ment, RetrySvg } from "./FailWithRetry.style";

const FailWithRetry = ({ retry }: { retry: () => void }) => {
  return (
    <CheckLayout>
      <Ment>{`실패했습니다. \n 다시 시도해주세요.`}</Ment>
      <RetrySvg src="/assets/icons/ic_retry.svg" alt="retry" onClick={retry} />
    </CheckLayout>
  );
};

export default FailWithRetry;
