import {
  Wrapper,
  InnerWrapper,
  TitleBar,
  TitleBarLeft,
  ProfileImg,
  ProfileData,
  Profile,
  CreateAt,
  TitleBarRight,
  Clip,
  Location,
  Border,
  ContentBar,
  ContentLeft,
  OneWrite,
  Product,
  ContentRight,
  ProducPrice,
  PickItemIcon,
  PickItemCount,
  SlideImgContent,
  SlideImg,
  Aaa,
  ThumbnailImg,
  ContentsBox,
  TagContent,
  Map,
  BottomButton,
  ToList,
  ToEditBuy,
  Border2,
} from "./MarketDetailBoard.styles";
import { Tooltip } from "antd";
import DOMPurify from "dompurify";

export default function MarketDetailBoardUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleBar>
          <TitleBarLeft>
            <ProfileImg
              src={
                props.data?.fetchUseditem.seller.picture
                  ? `https://storage.googleapis.com/${props.data.fetchUseditem.seller.picture}`
                  : "/image/marketboard/detail/profile.svg"
                // 이게 맞나..흠..
              }
            />
            {/* user ? `https://storage.googleapis.com/${user}` : "/images/avatar.png" */}
            {/* <ProfileImg>
                {props.data?.fetchUseditem.seller.picture}
              </ProfileImg>
              <ProfileImg src="/image/marketboard/detail/profile.svg" /> */}
            <ProfileData>
              <Profile>{props.data?.fetchUseditem.seller.name}</Profile>
              <CreateAt>
                Date : {props.data?.fetchUseditem.createdAt.slice(0, 10)}
              </CreateAt>
            </ProfileData>
          </TitleBarLeft>
          <TitleBarRight>
            <Clip src="/image/ic_link-32px.svg" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
              // 내용이 있다면 뜨고 없으면 안떠야하는데..!! isOpen을 false 값으로 주고 내용이 있을 때 true값으로 줘서 띄우기
            >
              <Location src="/image/ic_location_on-32px.svg" />
            </Tooltip>
          </TitleBarRight>
        </TitleBar>
        <Border />
        <ContentBar>
          <ContentLeft>
            <OneWrite>{props.data?.fetchUseditem.remarks}</OneWrite>
            <Product>{props.data?.fetchUseditem.name}</Product>
          </ContentLeft>
          <ContentRight>
            <PickItemIcon onClick={props.onClickPickItem} />
            {/* 이건 하트 아이콘 */}
            <PickItemCount>
              {props.data?.fetchUseditem.pickedCount}
            </PickItemCount>
          </ContentRight>
        </ContentBar>
        <ProducPrice>
          {props.data?.fetchUseditem.price.toLocaleString()} 원
        </ProducPrice>
        <SlideImgContent>
          <SlideImg>슬라이드캐러셀궁시렁</SlideImg>
          <Aaa>
            <ThumbnailImg>썸네일</ThumbnailImg>
            <ThumbnailImg>썸네일</ThumbnailImg>
            <ThumbnailImg>썸네일</ThumbnailImg>
            <ThumbnailImg>썸네일</ThumbnailImg>
          </Aaa>
        </SlideImgContent>
        {process.browser && (
          <ContentsBox
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        )}
        <TagContent>{props.data?.fetchUseditem.tags}</TagContent>
        <Border />
        <Map>지도api아마도</Map>
        <BottomButton>
          <ToList onClick={props.onClickMoveToList}>목록으로</ToList>
          <ToEditBuy onClick={props.onClickMoveToEdit}>
            구매하기수정하기
          </ToEditBuy>
        </BottomButton>
        <Border2 />
      </InnerWrapper>
    </Wrapper>
  );
}
