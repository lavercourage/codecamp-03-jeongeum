import {
  Page,
  Wrapper,
  TitleBar,
  TitleBarLeft,
  Profile,
  TitleBarRight,
  Line,
  Title,
  Content,
  MainImg,
  ProfileImg,
  ProfileData,
  CreateDt,
  Clip,
  Location,
  Video,
  Recommand,
  Like,
  LikeImg,
  LikeCount,
  Dislike,
  DislikeImg,
  DislikeCount,
  ThreeButton,
  ToList,
  ToEdit,
  ToDelete,
} from "./DetailBoard.styles";

export default function DetailBoardUI(props) {
  return (
    <Page>
      <Wrapper>
        <TitleBar>
          <TitleBarLeft>
            <ProfileImg src="/image/ProfileVector.svg" />
            <ProfileData>
              <Profile>{props.data?.fetchBoard.writer}</Profile>
              <CreateDt>{props.data?.fetchBoard.createdAt}</CreateDt>
            </ProfileData>
          </TitleBarLeft>
          <TitleBarRight>
            <Clip src="/image/ic_link-32px.svg" />
            <Location src="/image/ic_location_on-32px.svg" />
          </TitleBarRight>
        </TitleBar>
        <Line></Line>
        <Title>{props.data?.fetchBoard.title}</Title>
        <MainImg src="/image/image.png" />
        <Content>{props.data?.fetchBoard.contents}</Content>
        <Video src="/image/video.png" />
        <Recommand>
          <Like>
            <LikeImg src="/image/ic_thumb_up_off_alt-24px.svg" />
            <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
          </Like>
          <Dislike>
            <DislikeImg src="/image/ic_thumb_down-24px.svg" />
            <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
          </Dislike>
        </Recommand>
      </Wrapper>
      <ThreeButton>
        <ToList onClick={props.onClickMoveToList}>목록으로</ToList>
        <ToEdit onClick={props.onClickMoveToEdit}>수정하기</ToEdit>
        <ToDelete onClick={props.onClickMoveToDelete}>삭제하기</ToDelete>
        {/* onClick={onClickToDelete} */}
      </ThreeButton>
    </Page>
  );
}
