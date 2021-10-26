import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_BOARD_COMMENT,
  EDIT_BOARD_COMMENT,
} from "./commentBoard.queries";
import { FETCH_BOARD_COMMENTS } from "../list/commentListBoard.queries";
import CommentBoardUI from "./commentBoard.presenter";

export default function CommentBoard(props: any) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(5);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(EDIT_BOARD_COMMENT);

  function onChangeMyWriter(event: any) {
    setWriter(event.target.value);
  }
  function onChangeMyPassword(event: any) {
    setPassword(event.target.value);
  }
  function onChangeMyContent(event: any) {
    setContents(event.target.value);
  }
  function onChangeStar(value: any) {
    setStar(value);
  }
  async function onClickSubmitButton() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: star,
          },
          boardId: String(router.query.secondpage),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.secondpage },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }
  async function onClickEditButton(event: any) {
    event.target.id;
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: contents },
          password: password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.secondpage },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <CommentBoardUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContent={onChangeMyContent}
      onChangeStar={onChangeStar}
      onClickSubmitButton={onClickSubmitButton}
      onClickEditButton={onClickEditButton}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
