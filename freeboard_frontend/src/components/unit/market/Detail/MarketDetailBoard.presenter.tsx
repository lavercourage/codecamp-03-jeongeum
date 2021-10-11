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

export default function MarketDetailBoardUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleBar>
          <TitleBarLeft>
            <ProfileImg src="/image/marketboard/detail/profile.svg" />
            <ProfileData>
              <Profile>
                {props.data?.fetchUseditem.seller}하드코딩 판매자
              </Profile>
              <CreateAt>
                Date : {props.data?.fetchUseditem.createdAt.slice(0, 10)}{" "}
                하드코딩 (2021.10.12) 내용없애기
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
            <OneWrite>
              {props.data?.fetchUseditem.remarks}하드코딩 한줄요약
            </OneWrite>
            <Product>{props.data?.fetchUseditem.name}하드코딩 상품명</Product>
          </ContentLeft>
          <ContentRight>
            <PickItemIcon onClick={props.onClickPickItem} />
            {/* 이건 하트 아이콘 */}
            <PickItemCount>
              {props.data?.fetchUseditem.pickedCount}하코20
            </PickItemCount>
          </ContentRight>
        </ContentBar>
        <ProducPrice>
          {props.data?.fetchUseditem.price}하드코딩 10,000원
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
        <ContentsBox>
          {props.data?.fetchUseditem.contents}
          sdfdsfssdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafsdfdsfsafaf
        </ContentsBox>
        <TagContent>
          {props.data?.fetchUseditem.tags} 하드코딩 #가나다 #나라라 #나라라
          #나라라 하드코딩
        </TagContent>
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
