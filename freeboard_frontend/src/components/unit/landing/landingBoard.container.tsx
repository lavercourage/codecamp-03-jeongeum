import { useRouter } from "next/router";
import LandingBoardUI from "./landingBoard.presenter";

export default function LandingBoard() {
  const router = useRouter();

  function onClickBoard() {
    router.push(`/boards/list-board`);
  }

  return <LandingBoardUI onClickBoard={onClickBoard} />;
}
