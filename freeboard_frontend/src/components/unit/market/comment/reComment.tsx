import { useState } from "react";
import styled from "@emotion/styled";

const InputBox = styled.input``;
const Div_Wrapper = styled.div`
  width: 100px;
  height: 200px;
`;

export default function ReCommentSolid() {
  // 내 댓글인 경우 삭제하기
  // 남의 댓글인 경우 추가하기
  // ㄴ 이것은 액세스 토큰 활용?
  // 대댓글은 컴포넌트 분리 후 합치기 or 대댓글에 적용? 재활용을 어떻게 할 것 인지?
  // 삭제할 때 alert 띄우기
  // useState를 활용해서 대듯르을 활성화하기

  const [textcontent, setTextContent] = useState("");
  const [inputBox, setInputBox] = useState("");

  const onChangeInput = (e: any) => {
    setTextContent(e.target.value);
  };
  const onChangeInputBox = (e: any) => {
    setInputBox(e.target.value);
  };

  return (
    <>
      <div>writer</div>
      <div>createdAt</div>
      <div>content</div>
      <image>수정</image>
      <image>삭제</image>
      <input type="text" onChange={onChangeInput} />
      <InputBox type="text" onChange={onChangeInputBox} />
      <Div_Wrapper></Div_Wrapper>
    </>
  );
}
