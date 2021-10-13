// 1. /pages/quiz06/editor/writer/index.tsx 페이지를 만들고, 폼을 만들어 주세요.(react-hook-form 사용)
// ⇒ 폼의 내용은 writer, password, title, contents 총 4가지 항목입니다.
// 2. contents 부분은 react-quill 에디터를 사용해서 만들어 주세요.
// ⇒ react-quill을 적용할 때 발생하는 SSR 이슈는 dynamic import를 활용해서 완료해서 주세요.
// 3. [ 등록하기 ] 버튼을 누르면 게시물을 등록하고, /pages/quiz06/editor/detail/[id]/index.tsx 페이지로 이동시켜 주세요.
// 4. 이동된 페이지에서는 router의 id를 이용하여 게시물 데이터를 불러와서 화면에 출력해 주세요.
// 5. 출력된 데이터 중, contents 부분은 태그를 포함하고 있으므로, dangerousIySetInnerHTML 속성을 사용하여 나타내 주세요.

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($aaaa: CreateBoardInput!) {
    createBoard(createBoardInput: $aaaa) {
      _id
    }
  }
`;

export default function QuizEditorPage() {
  const router = useRouter();
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickWrite = async (data: any) => {
    console.log(data);
    // try {
    //   const result = await createBoard({
    //     variables: {
    //       aaaa: {
    //         writer: data.myWriter,
    //         password: data.myPassword,
    //         title: data.myTitle,
    //         contents: data.myContents,
    //       },
    //     },
    //   });
    //   router.push(`/quiz06/editor/detail/${result.data.createBoard._id}`);
    // } catch (error) {
    //   alert(error);
    //   console.log(error.message);
    // }
  };

  const onChangeContents = (value: any) => {
    setValue("myContents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("myContents");
  };

  return (
    <form onSubmit={handleSubmit(onClickWrite)}>
      writer : <input type="text" {...register("myWriter")} /> <br />
      password : <input type="password" {...register("myPassword")} /> <br />
      title : <input type="text" {...register("myTitle")} /> <br />
      contents :{" "}
      <ReactQuill
        style={{ width: "500px", height: "400px", padding: "40px" }}
        onChange={onChangeContents}
      />
      {/* <input type="text" {...register("myContents")} /> <br /> */}
      <button type="submit">button</button>
    </form>
  );
}
