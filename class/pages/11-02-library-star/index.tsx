import { Rate } from "antd";
import { useState } from "react";

// const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const desc = ["끔찍한", "나쁜", "그냥저냥", "좋은듯", "쩐다"];
// 하드코딩으로 다시 만들 필요가 없기 때문에 위로 따로 분리 (하지만 난 이해하지 못했지)

export default function LibraryStarPage() {
  const [value, setValue] = useState(5);
  const handleChange = (value) => {
    setValue(value);
  };
  // 셋벨류의 벨류는 핸들체인지의 벨류 기능명(?)
  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {/* 여기의 {벨류}는 콘스트의 벨류(가장 가까운 중괄호) */}

      {/* <Rate tooltips={desc} onChange={handleChange} value={value} /> */}
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
      {/* 별점 옆에 설명 부분 */}
    </span>
  );
}
