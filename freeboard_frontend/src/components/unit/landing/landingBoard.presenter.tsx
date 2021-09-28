import {
  Wrapper,
  BackgroundImg,
  BackgroundImgButton,
} from "./landingBoard.styles";

export default function LandingBoard(props) {
  return (
    <Wrapper>
      <BackgroundImg></BackgroundImg>
      <BackgroundImgButton onClick={props.onClickBoard}>
        게시판으로 이동하기
      </BackgroundImgButton>
      {/* src="/image/landing-forest.jpg" */}
    </Wrapper>
  );
}
