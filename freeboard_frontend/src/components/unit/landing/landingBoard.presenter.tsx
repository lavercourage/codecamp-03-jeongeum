import { Wrapper, BackgroundImgButton } from "./landingBoard.styles";

export default function LandingBoard(props: any) {
  return (
    <Wrapper>
      <BackgroundImgButton onClick={props.onClickBoard}>
        게시판으로 이동하기
      </BackgroundImgButton>
    </Wrapper>
  );
}
