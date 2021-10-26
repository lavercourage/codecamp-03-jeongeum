import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketCommentBoardUI from "./marketComment.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./marketComment.queries";

export default function MarketCommentBoard() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onChangeMyContent = (e: any) => {
    setContents(e.target.value);
  };

  const onClickSubmitButton = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: router.query.marketpage,
        },
      });
      alert("성공");
    } catch (error) {
      console.log("댓글오류: ", error);
    }
  };

  return (
    <>
      <MarketCommentBoardUI
        onChangeMyContent={onChangeMyContent}
        onClickSubmitButton={onClickSubmitButton}
      />
    </>
  );
}
