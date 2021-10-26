import { useRef } from "react";
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
  Page,
} from "./commentBoard.styles";

export default function CommentBoardUI(props: any) {
  const textRef = useRef<HTMLTextAreaElement>();
  function onClickTextArea() {
    textRef.current.focus();
  }
  return (
    <Page>
      <Wrapper>
        {!props.isEdit && (
          <TopTitle>
            <CommentIcon src="/image/rate_review-24px.svg" />
            <CommentTitle>댓글</CommentTitle>
          </TopTitle>
        )}
        <MiddelTitle>
          <Writer
            placeholder="작성자"
            onChange={props.onChangeMyWriter}
            readOnly={Boolean(props.el?.writer)}
            defaultValue={props.el?.writer}
          />
          <Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeMyPassword}
          />
          <Star onChange={props.onChangeStar} />
        </MiddelTitle>
        <BottomTitle onClick={onClickTextArea}>
          <Content
            ref={textRef}
            maxLength={100}
            onChange={props.onChangeMyContent}
            defaultValue={props.el?.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            // maxlength="100"
          />
          <BottomTitleUnder>
            <Textlength>{props.contents.length}/100</Textlength>

            {!props.isEdit && (
              <Button onClick={props.onClickSubmitButton}>등록하기</Button>
            )}

            {props.isEdit && (
              <Button
                onClick={props.onClickEditButton}
                id={props.el?._id}
                isEdit={props.isEdit}
              >
                수정하기
              </Button>
            )}

            {/* <Button
              id={props.el?._id}
              onClick={
                props.isEdit
                  ? props.onClickEditButton
                  : props.onClickSubmitButton
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </Button> */}
          </BottomTitleUnder>
        </BottomTitle>
      </Wrapper>
    </Page>
  );
}
