import { useRef } from "react";
import {
  Page,
  Wrapper,
  TopTitle,
  CommentIcon,
  CommentTitle,
  BottomTitle,
  Content,
  BottomTitleUnder,
  Textlength,
  Button,
} from "./MarketComment.styles";

export default function MarketCommentBoardUI(props: any) {
  const textRef = useRef<HTMLTextAreaElement>();
  function onClickTextArea() {
    textRef.current.focus();
  }
  return (
    <Page>
      <Wrapper>
        <TopTitle>
          <CommentIcon src="/image/rate_review-24px.svg" />
          <CommentTitle>댓글</CommentTitle>
        </TopTitle>
        <BottomTitle onClick={onClickTextArea}>
          <Content
            // ref={textRef}
            // maxLength={100}
            // onChange={props.onChangeMyContent}
            // defaultValue={props.el?.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <BottomTitleUnder>
            <Textlength>
              {/* {props.contents.length} */}
              /100
            </Textlength>
            <Button onClick={props.onClickSubmitButton}>문의하기</Button>
          </BottomTitleUnder>
        </BottomTitle>
      </Wrapper>
    </Page>
  );
}
