import BoardWriteUI from "./WriteBoard.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./WriteBoard.queries";
import { useRouter } from "next/router";
// import { Writer } from "./CreatedBoard.styles"

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [substance, setSubstance] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [substanceError, setSubstanceError] = useState("");

  const [qqq, setQqq] = useState(false);
  // setQqq는 필요없음 지워도 괜찮

  const [makeBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      substance !== ""
    ) {
      setQqq(true);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      substance !== ""
    ) {
      setQqq(true);
    }
  }

  function onChangeLabel(event) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      substance !== ""
    ) {
      setQqq(true);
    }
  }

  function onChangeSubstance(event) {
    setSubstance(event.target.value);
    if (event.target.value) {
      setSubstanceError("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setQqq(true);
    }
  }

  async function onClickSubmit() {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요!");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요!");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요!");
    }
    if (substance === "") {
      setSubstanceError("내용을 입력해주세요!");
    }
    if (writer !== "" && password !== "" && title !== "" && substance !== "") {
      alert("게시물을 등록합니다!");
    }
    try {
      const result = await makeBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: substance,
          },
        },
      });
      // console.log(result)
      // console.log(result.data.createBoard._id)
      // 결과값이 만들어진 보드의 id값
      router.push(`/boards/${result.data.createBoard._id}`);
      // 이 부분은 해당 크리에이트 보드의 아이디값으로 이동
      // 라우터로 푸쉬해서 보여질 때 보드의 id값을 보여준다!
      // 라우터로 푸쉬해줌! 명령어 (콘솔따위가 아님)
      // 근데 푸쉬해서 보여줄 값이 해당 보드의 id값
    } catch (error) {
      console.log(error);
    }
  }
  // function onClickSubmit() {} 버튼을 발동하는 if조건문이 있다. 그리고 useMutation을 하기 위한 makeBoard 내용?이 있음 걍 같이 쓰면 됨..
  // 왼쪽 writer는 playground에서 확인하는 createBoard(createBoardInput:CreateBoardInput!):Board! 의 CreateBoardInput! 안에 들어있는 writer:String password:String title:String! 이런 내용의 형태? 항목임
  // const = [state, setState] = useState("") state: 변수명 / useState: 변수를 바꿔주는 도구 / useState(""): 초기값
  // 오른쪽의 writer는 const의 변수명

  // function onClickCancle () {
  //     alert("게시물 수정을 취소합니다!")
  // }

  async function onClickEdit() {
    try {
      await updateBoard({
        variables: {
          boardId: router.query.secondpage,
          password: password,
          updateBoardInput: {
            title: title,
            contents: substance,
          },
        },
      });
      router.push(`/boards/${router.query.secondpage}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeLabel={onChangeLabel}
      onChangeSubstance={onChangeSubstance}
      onClickSubmit={onClickSubmit}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      substanceError={substanceError}
      onClickEdit={onClickEdit}
      // 키 = {값 함수}
      // presenter로 빠진 기능명 = {const [key,~~}
      // 앞 명칭과 뒤 명칭 알아놓기
      // 에러에 해당하는 부분
      qqq={qqq}
    />
  );
}