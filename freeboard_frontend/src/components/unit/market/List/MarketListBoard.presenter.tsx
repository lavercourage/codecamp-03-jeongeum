import InfiniteScroll from "react-infinite-scroller";

export default function MarketListBoardUI(props: any) {
  return (
    <div style={{ overflow: "auto", backgroundColor: "gray" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
        style={{ height: "1004px" }}
        //   loader={<div className="loader" key={0}> Loading ... </div>}
      >
        {props.data?.fetchUseditems.map((el: any) => (
          <div key={el._id} id={el._id} onClick={props.onClickMoveProduct}>
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
