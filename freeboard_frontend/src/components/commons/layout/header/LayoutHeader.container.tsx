import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeder.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickHeader(event) {
    router.push(event.target.id);
  }
  return <LayoutHeaderUI onClickHeader={onClickHeader} />;
}
