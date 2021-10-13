import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { Modal } from "antd";
// import ReactQuill from "react-quill";  // 프론트엔드 서버에서 그릴 때, document가 없어서 문제가 됨!

// 스타일즈에 빼고 여기에 가져오기
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 좋아!

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  //   function onClickMyButton() {}
  // hof를 이용할 때는 async는 중괄호와 가장 가까운 괄호에 붙여주기
  const onClickSubmit = async (data: any) => {
    // console.log(data);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/28-02-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      //   Modal.error("");
      console.log(error);
    }
    // finally {
    // 반드시 실행해야 하는 것? 11시 47분 참고
    // try의 성공 유무를 떠나 마지막으로 반드시 실행되는 것
    // 요청을 했는데 성공을 했는지 못했는지는 모르지만 서버에 알림을 줘야할 때 사용
    // }
  };

  function onChangeMyEditor(value: any) {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br><p>" ? "" : value);
    console.log(value);

    // onChange 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} /> <br />
      비밀번호 : <input type="password" {...register("password")} /> <br />
      제목 : <input type="text" {...register("title")} /> <br />
      내용 :{" "}
      <ReactQuill
        style={{ height: "500px", width: "600px" }}
        onChange={onChangeMyEditor}
      />
      <br />
      <button type="submit">등록하기</button>
      <button type="reset">지우기</button>
      {/* <button onClick={onClickMyButton}>나의버튼</button> */}
    </form>
  );
}
