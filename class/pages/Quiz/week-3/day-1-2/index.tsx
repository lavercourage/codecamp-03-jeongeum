// 클래스형 -> 함수형으로 변환
// 1주차에 나와있음

import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  mountNode
);

// css내용
// .site-calendar-demo-card {
//   width: 300px;
//   border: 1px solid #f0f0f0;
//   border-radius: 2px;
// }
