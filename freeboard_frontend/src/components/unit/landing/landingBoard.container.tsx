import { useRouter } from "next/router";
import LandingBoardUI from "./landingBoard.presenter";

export default function LandingBoard() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push(`/logIn`);
  };

  return <LandingBoardUI onClickBoard={onClickBoard} />;
}
