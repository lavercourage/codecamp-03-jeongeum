// 04-04-graphql-mutation-board3 비교하면서 학습하기

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;

export default function GraphqlMutationBoard3Page() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContents, setMyContents] = useState("");
  // 위 친구들을 하나로 묶어서 같이 사용
  // const를 만들어 그곳의 useState값에 넣어주기

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
      // writer: myInputs.writer
      // title: myInputs.title
      // contents: myInputs.contents
    });

    // event.target.name; //writer
    // event.target.value; //writer의 값
  }

  // function onChangeMyWriter(event) {
  //   setMyWriter(event.target.value);
  // }

  // function onChangeMyTitle(event) {
  //   setMyTitle(event.target.value);
  // }

  // function onChangeMyContents(event) {
  //   setMyContents(event.target.value);
  // }

  async function aaa() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
