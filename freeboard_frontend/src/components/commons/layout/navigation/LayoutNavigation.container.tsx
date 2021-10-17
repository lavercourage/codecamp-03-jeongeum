import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
export default function LayoutNavigation() {
  const router = useRouter();

  function onClickNav(event: any) {
    router.push(event.target.id);
  }
  // 위 id는 LayoutNavigationUI의 id값을 준것 각 id 마다 폴더명이 적혀잇음

  return <LayoutNavigationUI onClickNav={onClickNav} />;
}
