import { useRouter } from "next/router";
import LandingBoardUI from "./landingBoard.presenter";

export default function LandingBoard() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push(`/boards/list-board`);
  };

  return <LandingBoardUI onClickBoard={onClickBoard} />;
}
