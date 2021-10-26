import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketCommentBoardUI from "./marketComment.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./marketComment.queries";

export default function MarketCommentBoard() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

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

  // const onClickEditButton = (event :any) => {
  //   updateUseditemQuestion({
  //     variables: {
  //       updateUseditemQuestionInput: { contents: contents },
  //       useditemQuestionId: event.target.id
  //       // 이벤트 타겟에서 얻어온 id 해당 코드를 보면
  //       // ex) id={el._id}로 보이는데 앞 id가 해당 id
  //     },
  //     refetchQueries: [{
  //       query:
  //     }]
  //   });
  // };

  return (
    <>
      <MarketCommentBoardUI
        contents={contents}
        onChangeMyContent={onChangeMyContent}
        onClickSubmitButton={onClickSubmitButton}
      />
    </>
  );
}
