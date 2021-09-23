import {
  Button,
  Textlength,
  BottomTitleUnder,
  Content,
  Star,
  Password,
  Writer,
  BottomTitle,
  MiddelTitle,
  CommentTitle,
  CommentIcon,
  TopTitle,
  Wrapper,
  Border,
  Page,
} from "./CommentBoard.styles";

export default function CommentBoardUI(props) {
  return (
    <Page>
      <Wrapper>
        <Border />
        <TopTitle>
          <CommentIcon src="/image/rate_review-24px.svg" />
          <CommentTitle>댓글</CommentTitle>
        </TopTitle>
        <MiddelTitle>
          <Writer placeholder="작성자" onChange={props.onChangeMyWriter} />
          <Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeMyPassword}
          />
          {/* <Star /> */}
        </MiddelTitle>
        <BottomTitle>
          <Content
            onChange={props.onChangeMyContent}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            // maxlength="100"
          />
          <BottomTitleUnder>
            <Textlength>0/100</Textlength>
            <Button
              onClick={
                props.isEdit
                  ? props.onClickEditButton
                  : props.onClickSubmitButton
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </Button>
          </BottomTitleUnder>
        </BottomTitle>
      </Wrapper>
    </Page>
  );
}
