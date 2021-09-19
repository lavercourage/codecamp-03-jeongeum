import {
  Star,
  Password,
  Writer,
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
      <MiddelTitle>
        <Writer placeholder="작성자" />
        <Password type="password" placeholder="비밀번호" />
        <Star />
      </MiddelTitle>
      <BottomTitle></BottomTitle>
    </Wrapper>
  );
}
