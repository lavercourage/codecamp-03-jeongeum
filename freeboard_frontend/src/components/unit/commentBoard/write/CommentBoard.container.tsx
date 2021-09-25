import CommentBoardUI from "./CommentBoard.presenter";
export default function CommentBoard() {
  function onChangeMyWriter() {}

  return (
    <CommentBoardUI
      onChangeMyWriter={onChangeMyWriter}
      // onChangeMyPassword={onChangeMyPassword}
      // onChangeMyContent={onChangeMyContent}
      // onClickEditButton={onClickEditButton}
      // onClickSubmitButton={onClickSubmitButton}
      // isEdit={isEdit}
    />
  );
}
