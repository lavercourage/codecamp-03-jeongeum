import { memo } from "react";

function MemoizationPresenterPage(props: any) {
  console.log("프리젠터가 렌더링 되었습니다.");
  return (
    <>
      <div style={{ color: "#115d56" }}>====================</div>
      <div
        style={{
          color: "#113f5d",
          fontWeight: "bold",
          backgroundColor: "#c3ff00",
          textAlign: "center",
        }}
      >
        이것은 프리젠터 입니다.
      </div>
      <div style={{ color: "#115d56" }}>====================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
