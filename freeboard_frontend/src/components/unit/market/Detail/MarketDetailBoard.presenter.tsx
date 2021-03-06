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
  SliderThumb,
  ThumbnailImg,
  ContentsBox,
  TagContent,
  // Map,
  BottomButton,
  ToList,
  ToEditBuy,
  Border2,
  SliderWrapper,
  SliderItem,
  DeleteIcon,
} from "./marketDetailBoard.styles";
import KakaoMapDetail from "../../../commons/kakao/kakaoMap/kakaoMapDetail";
import MarketCommentBoard from "../comment/marketComment/marketComment.container";

import { Tooltip } from "antd";
import Slider from "@ant-design/react-slick";
import DOMPurify from "dompurify";

export default function MarketDetailBoardUI(props: any) {
  console.log("디테일: ", props);
  let settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TitleBar>
          <TitleBarLeft>
            <ProfileImg
              src={
                props.data?.fetchUseditem.seller.picture
                  ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`
                  : "/image/marketboard/detail/profile.svg"
              }
            />
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
              // 내용이 있으면 뜸!!! / 없으면 어떻게?
              // isOpen을 false 값으로 주고 내용이 있을 때 true값으로 줘서 띄우기
            >
              <Location src="/image/ic_location_on-32px.svg" />
            </Tooltip>
            <DeleteIcon onClick={props.onClickDeleteItem}>X</DeleteIcon>
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
          <SliderWrapper>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images
                .filter((el: any) => el)
                .map((el: any) => (
                  <div key={el}>
                    <SliderItem src={`https://storage.googleapis.com/${el}`} />
                  </div>
                ))}
            </Slider>
          </SliderWrapper>
          <SliderThumb>
            {props.data?.fetchUseditem.images
              .filter((el: any) => el)
              .map((el: any) => (
                <div key={el}>
                  <ThumbnailImg
                    src={`https://storage.googleapis.com/${el}`}
                    onClick={props.onClickThumbImg}
                    // 작은 이미지 클릭하면 큰 이미지 바로 볼 수 있게
                  />
                </div>
              ))}
          </SliderThumb>
        </SlideImgContent>
        {process.browser && (
          <ContentsBox
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        )}
        <TagContent>
          {props.data?.fetchUseditem.tags.map((el: any) => "#" + el).join(" ")}
        </TagContent>
        <Border />
        <KakaoMapDetail data={props?.data} />
        <Border />
        <BottomButton>
          <ToList onClick={props.onClickMoveToList}>목록으로</ToList>
          {props.data?.fetchUseditem.seller?._id ===
          props.fetchUserLoggedIn?.fetchUserLoggedIn?._id ? (
            <ToEditBuy onClick={props.onClickMoveToEdit}>수정하기</ToEditBuy>
          ) : (
            <ToEditBuy onClick={props.onClickMoveToBuy}>구매하기</ToEditBuy>
          )}
        </BottomButton>
        <Border2 />
      </InnerWrapper>
      <MarketCommentBoard />
    </Wrapper>
  );
}
