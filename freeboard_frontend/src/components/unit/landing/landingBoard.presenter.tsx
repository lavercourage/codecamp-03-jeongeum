import { BackgroundImg } from "./landingBoard.styles";

export default function LandingBoard(props) {
  return (
    <BackgroundImg
      onClick={props.onClickBoard}
      src="/image/landing-forest.jpg"
    />
  );
}
