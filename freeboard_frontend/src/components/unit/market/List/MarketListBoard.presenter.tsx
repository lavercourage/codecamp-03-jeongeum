import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const ThumbImg = styled.img`
  width: 20px;
  height: 20px;
`;

const ThumbImgNone = styled.div`
  width: 20px;
  height: 20px;
  background-color: plum;
  text-align: center;
`;

export default function MarketListBoardUI(props: any) {
  return (
    <div
      style={{
        overflow: "auto",
        height: "300px",
        width: "1200px",
        backgroundColor: "gray",
      }}
    >
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
        // style={{ height: "300px", backgroundColor: "red" }}
        //   loader={<div className="loader" key={0}> Loading ... </div>}
      >
        {props.data?.fetchUseditems.map((el: any) => (
          <div key={el._id} id={el._id} onClick={props.onClickMoveProduct}>
            <image style={{ width: "20px", height: "20px" }}>
              {el.images[0] ? (
                <ThumbImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <ThumbImgNone>no!</ThumbImgNone>
              )}
            </image>
            <span
              style={{
                color: "#dc0740",
                marginRight: "20px",
              }}
            >
              {el.name}
            </span>
            <span
              style={{
                marginRight: "20px",
              }}
            >
              {el.remarks}
            </span>
            <span
              style={{
                color: "#dc0740",
                marginRight: "20px",
              }}
            >
              {el.tags}
            </span>
            <span
              style={{
                marginRight: "20px",
              }}
            >
              {el.seller.name}
            </span>
            <span
              style={{
                color: "#dc0740",
                marginRight: "20px",
              }}
            >
              {el.pickedCount}
            </span>
            <span
              style={{
                marginRight: "20px",
              }}
            >
              {Number(el.price).toLocaleString()}원
            </span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
