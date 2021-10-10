import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";

import CommentBoard from "../write/CommentBoard.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentListBoard.queries";
import {
  Avatar,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Star,
  UpdateIcon,
  Writer,
  PasswordInput,
} from "./CommentListBoard.styles";

export default function BoardCommentListUIItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
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

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onChangeDeletePassword(event: any) {
    setMyPassword(event.target.value);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/image/board/comment/commentProfile.svg" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.el?.writer}</Writer>
                <Star value={props.el?.rating} disabled />
              </WriterWrapper>
              <Contents>{props.el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon
                src="/image/board/comment/commentEdit.svg/"
                onClick={onClickUpdate}
              />
              <DeleteIcon
                src="/image/board/comment/commentDelete.svg/"
                onClick={onClickOpenDeleteModal}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{props.el?.createdAt.slice(0, 10)}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <CommentBoard isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
