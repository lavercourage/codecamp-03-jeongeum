import InfiniteScroll from "react-infinite-scroller";
import MarketSearchBarBoard from "../../../commons/searchbar/marketSearchbar";
import BestItemBoard from "../../../commons/bestItem/bestItem";
import RecentViewItemBoard from "../../../commons/recentItem/recentItem";
import TodayView from "../../../commons/todayView/todayView";

import {
  TopBar,
  ProductButton,
  ProductSoldButton,
  ProductList,
  ProductWrapper,
  Border1,
  Border2,
  ProductItem,
  ThumbImg,
  ThumbImgNone,
  Data,
  ProductName,
  ProductRemarks,
  ProductTag,
  ProductSeller,
  SellerProfileImg,
  SellerName,
  PickItemIcon,
  PickItemCount,
  ProductPriceData,
  ProductWon,
  ProductPrice,
  ProductBuyButton,
  ProductListWrapper,
} from "./marketListBoard.styles";

export default function MarketListBoardUI(props: any) {
  console.log(props);
  return (
    <>
      <BestItemBoard />
      <TopBar>
        <ProductButton>
          <ProductSoldButton
            onClick={props.onClickSelling}
            isSoldout={!props.isSoldout}
          >
            안팔림
          </ProductSoldButton>
          <ProductSoldButton
            onClick={props.onClickSoldout}
            isSoldout={props.isSoldout}
          >
            팔림
          </ProductSoldButton>
        </ProductButton>
        <MarketSearchBarBoard
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </TopBar>
      <ProductWrapper>
        <ProductListWrapper>
          <Border1 />
          <ProductList>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.fetchUseditems.map((el: any) => (
                <ProductItem
                  key={el._id}
                  id={el._id}
                  onClick={props.onClickMoveProduct}
                >
                  <div>
                    {el.images[0] ? (
                      <ThumbImg
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    ) : (
                      <ThumbImgNone>
                        이미지가
                        <br />
                        없습니다
                      </ThumbImgNone>
                    )}
                  </div>
                  <Data>
                    <ProductName>{el.name}</ProductName>
                    <ProductRemarks>{el.remarks}</ProductRemarks>
                    <ProductTag>#{el.tags.join(" #")}</ProductTag>
                    <ProductSeller>
                      <SellerProfileImg
                        src={
                          el.seller.picture
                            ? `https://storage.googleapis.com/${el.seller.picture}`
                            : "/image/marketboard/detail/profile.svg"
                        }
                      />
                      <SellerName>{el.seller.name}</SellerName>
                      <PickItemIcon />
                      <PickItemCount>{el.pickedCount}</PickItemCount>
                    </ProductSeller>
                  </Data>
                  <ProductPriceData>
                    <ProductWon>₩</ProductWon>
                    <ProductPrice>
                      {Number(el.price).toLocaleString()}원
                    </ProductPrice>
                  </ProductPriceData>
                </ProductItem>
              ))}
            </InfiniteScroll>
          </ProductList>
          <Border2 />
        </ProductListWrapper>
        <RecentViewItemBoard />
      </ProductWrapper>
      <ProductBuyButton onClick={props.onClickProductRegister}>
        상품 등록하기
      </ProductBuyButton>
      <TodayView />
    </>
  );
}
