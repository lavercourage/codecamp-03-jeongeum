import {
  Wrapper,
  BackgroundImg,
  BackgroundImgButton,
} from "./landingBoard.styles";

export default function LandingBoard(props) {
  return (
    <Wrapper>
      <BackgroundImgButton onClick={props.onClickBoard}>
        게시판으로 이동하기
      </BackgroundImgButton>
      {/* <BackgroundImg></BackgroundImg> */}
      {/* src="/image/landing-forest.jpg" */}
    </Wrapper>
  );
}
