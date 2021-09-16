import {
  BottomTitle,
  MiddelTitle,
  CommentTitle,
  CommentIcon,
  TopTitle,
  Wrapper,
} from "./CommentBoard.styles";

export default function CommentBoardUI() {
  return (
    <Wrapper>
      <TopTitle>
        <CommentIcon src="/image/rate_review-24px.svg" />
        <CommentTitle>댓글</CommentTitle>
      </TopTitle>
      <MiddelTitle></MiddelTitle>
      <BottomTitle></BottomTitle>
    </Wrapper>
  );
}
