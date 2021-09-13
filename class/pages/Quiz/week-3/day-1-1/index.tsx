// 1-1. 별점 라이브러리
import { Rate } from "antd";
import { useState } from "react";

const desc = ["풉키풉키", "햄버거", "조심해", "어..?어!!!!", "넌 죽은 목숨.."];

export default function RatePage() {
  const [value, setValue] = useState(3);
  const handleChange = (value) => {
    setValue(value);
    alert(desc[value - 1]);
  };
  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      <br />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      {/* <div>{desc[value - 1]}</div> */}
      {/* <Rate tooltips={desc} onChange={handleChange} value={value} /> */}
    </span>
  );
}
